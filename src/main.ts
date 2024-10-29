require("express-async-errors");
import express, { NextFunction, Request, Response } from "express";
import { eventRouter } from "./domains/event/eventRouter";
import { professionRouter } from "./domains/profession/professionRouter";
import { swaggerSpecs } from "./swagger";
import swaggerUI from "swagger-ui-express";

const app = express();

export const port = process.env.PORT || 8000;

app.use(express.json());

app.use(eventRouter);

app.use(professionRouter);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.get("/", (req: Request, res: Response) => {
  res.send("Express on Vercel");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
