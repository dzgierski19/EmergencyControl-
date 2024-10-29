import { Router } from "express";
import { eventController } from "../../IoC";

export const eventRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - title
 *         - eventLevel
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the event
 *         title:
 *           type: string
 *           description: The title of the event
 *         additionalInfo:
 *           type: string
 *           description: Additional information about the event
 *         eventLevel:
 *           type: integer
 *           description: The level of the event (1 - beginner, 2 - intermediate, 3 - advanced)
 *         status:
 *           type: string
 *           description: The status of the event (WAITING_FOR_ACTION, IN_PROGRESS, CANCELLED, FINISHED)
 *         isAccepted:
 *           type: boolean
 *           description: Whether the event is accepted
 *         workerId:
 *           type: string
 *           description: ID of the worker associated with the event
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the event was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the event was last updated
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the event was deleted
 *       example:
 *         id: "123efw9123y123"
 *         title: "Stolen money from store"
 *         additionalInfo: "NEED HELP ASAP"
 *         eventLevel: "INTERMEDIATE"
 *         status: "WAITING_FOR_ACTION"
 *         isAccepted: false
 *         workerId: "237tgy1238172et"
 *         createdAt: "2024-05-12T07:20:50.52Z"
 *         updatedAt: "2024-06-15T14:35:10.50Z"
 */

/**
 * @swagger
 * /events:
 *  get:
 *    summary: Returns the list of all events
 *    responses:
 *      200:
 *        description: The list of all events
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Event'
 */

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
