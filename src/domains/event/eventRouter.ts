import { Router } from "express";
import { eventController } from "../../IoC";
require("express-async-errors");

export const eventRouter = Router();

eventRouter.get("/events", eventController.getEvents);

eventRouter.get("/events/:eventId", eventController.getEvent);

eventRouter.post("/events", eventController.createEvent);

eventRouter.post("/events/:eventId", eventController.addWorkerToEvent);
