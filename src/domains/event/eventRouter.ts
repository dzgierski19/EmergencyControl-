import { Router } from "express";
import { eventController } from "../../IoC";
require("express-async-errors");

export const eventRouter = Router();

eventRouter.get("/", eventController.test);

eventRouter.get("/events", eventController.getEvents);

eventRouter.get("/events/:eventId", eventController.getEvent);

eventRouter.get(
  "/events/profession/:professionId",
  eventController.getAllEventsForProfession
);

eventRouter.post("/events", eventController.createEvent);

eventRouter.post("/events/:eventId", eventController.addWorkerToEvent);

eventRouter.put("/events/:eventId/accept-event", eventController.acceptEvent);

eventRouter.put("/events/:eventId/finish-event", eventController.finishEvent);

eventRouter.put("/events/:eventId/cancel-event", eventController.cancelEvent);
