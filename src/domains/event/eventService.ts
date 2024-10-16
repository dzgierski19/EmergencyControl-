import { IProfessionService } from "../profession/professionService";
import { IEventAdapter } from "./eventAdapter";
import {
  EventToCreate,
  EventToUpdate,
  Level,
  NUMBER_LEVEL_MAPPER,
} from "./eventTypes";

export interface IEventService {}

export class EventService implements IEventService {
  constructor(
    private readonly professionService: IProfessionService,
    private readonly eventAdapter: IEventAdapter
  ) {}

  async createEvent(data: EventToCreate) {
    const { workerId, eventLevel } = data;
    if (workerId) {
      const worker = await this.professionService.getProfession(workerId);
      this.compareLevels(worker.workerLevel, eventLevel);
      await this.eventAdapter.createOne(data);
      return;
    }
    const filteredWorkers = await this.professionService.getProfessionsByLevel(
      eventLevel
    );
    if (filteredWorkers.length) {
      data.workerId = filteredWorkers[0].id;
      await this.eventAdapter.createOne(data);
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
    const profession = await this.eventAdapter.getOne(id);
    return profession;
  }

  async deleteEvent(id: string) {
    await this.getEvent(id);
    await this.eventAdapter.deleteOne(id);
  }

  async updateEvent(id: string, data: EventToUpdate) {
    await this.getEvent(id);
    await this.eventAdapter.updateOne(id, data);
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
