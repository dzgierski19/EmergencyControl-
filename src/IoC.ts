import dotenv from "dotenv";
dotenv.config();
import { ProfessionAdapter } from "./domains/profession/professionAdapter";
import { LEVELS } from "./domains/event/eventTypes";
import { ProfessionService } from "./domains/profession/professionService";
import { EventAdapter } from "./domains/event/eventAdapter";
import { EventService } from "./domains/event/eventService";
import { EventController } from "./domains/event/eventController";
import { ProfessionController } from "./domains/profession/professionController";

export const professionAdapter = new ProfessionAdapter();
export const professionService = new ProfessionService(professionAdapter);
export const eventAdapter = new EventAdapter();
export const eventService = new EventService(professionService, eventAdapter);
export const eventController = new EventController(
  eventService,
  professionService
);
export const professionController = new ProfessionController(professionService);
