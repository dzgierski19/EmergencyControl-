import { IProfessionService } from "../profession/professionService";
import { IEventAdapter } from "./eventAdapter";
import {
  EventToCreate,
  EventToUpdate,
  Level,
  NUMBER_LEVEL_MAPPER,
  Event,
  STATUSES,
} from "./eventTypes";

export interface IEventService {
  createEvent(data: EventToCreate): Promise<void>;
  addWorkerToEvent(eventId: string, workerId?: string): Promise<void>;
  getAllEvents(): Promise<Event[]>;
  getEvent(eventId: string): Promise<Event>;
  deleteEvent(eventId: string): Promise<void>;
  updateEvent(eventId: string, data: EventToUpdate): Promise<void>;
  getAllEventsForProfession(professionId: string): Promise<Event[]>;
}

export class EventService implements IEventService {
  constructor(
    private readonly professionService: IProfessionService,
    private readonly eventAdapter: IEventAdapter
  ) {}

  async createEvent(data: EventToCreate) {
    await this.eventAdapter.createOne(data);
  }

  async addWorkerToEvent(eventId: string, workerId?: string) {
    await this.isWorkerOnThisEvent(eventId);
    const { eventLevel } = await this.getEvent(eventId);
    if (workerId) {
      await this.isWorkerAlreadyOnAnotherEvent(workerId);
      const { workerLevel } = await this.professionService.getProfession(
        workerId
      );
      this.compareLevels(workerLevel, eventLevel);
      await this.updateEvent(eventId, { workerId: workerId });
      return;
    }
    const filteredWorkers = await this.professionService.getProfessionsByLevel(
      eventLevel
    );
    if (filteredWorkers.length) {
      const firstWorker = filteredWorkers[0].id;
      await this.updateEvent(eventId, { workerId: firstWorker });
      return;
    }
    throw new Error("No suitable workers found");
  }

  async getAllEvents() {
    const all = await this.eventAdapter.getAll();
    console.log(all);
    return all;
  }

  async getEvent(id: string) {
    const event = await this.eventAdapter.getOne(id);
    return event;
  }

  async deleteEvent(id: string) {
    await this.getEvent(id);
    await this.eventAdapter.deleteOne(id);
  }

  async updateEvent(id: string, data: EventToUpdate) {
    await this.getEvent(id);
    await this.eventAdapter.updateOne(id, data);
  }

  async getAllEventsForProfession(professionId: string): Promise<Event[]> {
    const allEvents = await this.getAllEvents();
    return allEvents.filter((event) => event.workerId === professionId);
  }

  private async isWorkerAlreadyOnAnotherEvent(workerId: string) {
    const { currentEventId } = await this.professionService.getProfession(
      workerId
    );
    if (currentEventId) {
      throw new Error(
        `Worker ${workerId} is already on event ${currentEventId}`
      );
    }
  }

  private async isWorkerOnThisEvent(eventId: string) {
    const { workerId, status } = await this.getEvent(eventId);
    if (status === STATUSES.CANCELLED || status === STATUSES.FINISHED) {
      throw new Error(`Event ${eventId} is ${status}`);
    }
    if (status === STATUSES.IN_PROGRESS) {
      throw new Error(`Worker ${workerId} is already on this event`);
    }
  }

  private compareLevels(professionLevel: Level, eventLevel: Level) {
    if (
      NUMBER_LEVEL_MAPPER[professionLevel] < NUMBER_LEVEL_MAPPER[eventLevel]
    ) {
      throw new Error(
        `You can't choose worker with ${professionLevel} level. Please choose someone with at least ${eventLevel} level`
      );
    }
  }
}
