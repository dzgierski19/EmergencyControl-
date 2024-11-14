import { IEventService } from "../event/eventService";
import { STATUSES } from "../event/eventTypes";
import { IProfessionService } from "../profession/professionService";
import { IVehicleService } from "../vehicle/vehicleService";

interface IUserService {
  acceptEvent(eventId: string, professionId: string): Promise<void>;
  finishEvent(eventId: string, professionId: string): Promise<void>;
  cancelEvent(eventId: string, professionId: string): Promise<void>;
}

export class UserService implements IUserService {
  constructor(
    private readonly eventService: IEventService,
    private readonly professionService: IProfessionService,
    private readonly vehicleService: IVehicleService
  ) {}

  async acceptEvent(eventId: string, professionId: string) {
    const { workerId } = await this.eventService.getEvent(eventId);
    if (professionId === workerId) {
      await this.eventService.updateEvent(eventId, { isAccepted: true });
      await this.professionService.updateProfession(professionId, {
        currentEventId: eventId,
      });
      await this.eventService.updateEvent(eventId, {
        status: STATUSES.IN_PROGRESS,
      });
      return;
    }
    throw new Error(
      `Worker with id: ${professionId} is not added to this Event`
    );
  }

  async cancelEvent(eventId: string, professionId: string) {
    const { workerId } = await this.eventService.getEvent(eventId);
    if (professionId === workerId) {
      await this.eventService.updateEvent(eventId, {
        status: STATUSES.CANCELLED,
      });
      await this.eventService.updateEvent(eventId, { isAccepted: false });
      await this.professionService.updateProfession(professionId, {
        currentEventId: null,
      });
      return;
    }
    throw new Error(
      `Worker with id: ${professionId} is not added to this Event`
    );
  }

  async finishEvent(eventId: string, professionId: string) {
    const { workerId, status } = await this.eventService.getEvent(eventId);
    if (professionId === workerId && status === STATUSES.IN_PROGRESS) {
      await this.eventService.updateEvent(eventId, {
        status: STATUSES.FINISHED,
      });
      await this.eventService.updateEvent(eventId, { isAccepted: true });
      await this.professionService.updateProfession(professionId, {
        currentEventId: null,
      });
      return;
    }
    throw new Error(
      `Event with id: ${eventId} has bad status or worker with id: ${professionId} is not allowed to finish this event`
    );
  }
}
