import { NextFunction, Request, Response } from "express";
import { IProfessionService } from "../profession/professionService";
import { IEventService } from "./eventService";
import { Event } from "./eventTypes";

export interface IEventController {
  getEvents(req: Request, res: Response): Promise<void>;
  getEvent(req: Request, res: Response): Promise<void>;
  createEvent(req: Request, res: Response): Promise<void>;
  addWorkerToEvent(req: Request, res: Response): Promise<void>;
}

export class EventController implements IEventController {
  constructor(
    private readonly eventService: IEventService,
    private readonly professionService: IProfessionService
  ) {}

  getEvents = async (req: Request, res: Response) => {
    const events = await this.eventService.getAllEvents();
    console.log(events);
    res.status(200).json(events);
  };

  getEvent = async (req: Request, res: Response) => {
    const eventId = req.params.id;
    console.log(eventId);
    const event = await this.eventService.getEvent(eventId);
    res.status(200).json(event);
  };

  createEvent = async (req: Request, res: Response) => {
    const data = req.body;
    await this.eventService.createEvent(data);
    res.status(201).json({ message: "Event created successfully" });
  };

  addWorkerToEvent = async (req: Request, res: Response) => {
    const eventId = req.params.eventId;
    const workerId = req.body.workerId;
    if (workerId) {
      await this.eventService.addWorkerToEvent(eventId, workerId);
      res.status(200).json({ message: "Worker added to event successfully" });
    }
    await this.eventService.addWorkerToEvent(eventId);
    res.status(200).json({ message: "Worker added to event successfully" });
  };

  acceptEvent = async (req: Request, res: Response) => {
    const eventId = req.params.eventId;
    const professionId = req.body.professionId;
    await this.eventService.acceptEvent(eventId, professionId);
    res.status(200).json({ message: "Event accepted successfully" });
  };

  finishEvent = async (req: Request, res: Response) => {
    const eventId = req.params.eventId;
    const professionId = req.body.professionId;
    await this.eventService.finishEvent(eventId, professionId);
    res.status(200).json({ message: "Event finished successfully" });
  };

  cancelEvent = async (req: Request, res: Response) => {
    const eventId = req.params.eventId;
    const professionId = req.body.professionId;
    await this.eventService.cancelEvent(eventId, professionId);
    res.status(200).json({ message: "Event cancelled successfully" });
  };

  getAllEventsForProfession = async (req: Request, res: Response) => {
    const professionId = req.params.professionId;
    const events = await this.eventService.getAllEventsForProfession(
      professionId
    );
    res.status(200).json(events);
  };
}
