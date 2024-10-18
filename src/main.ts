import express from "express";
import { eventRouter } from "./domains/event/eventRouter";
import { professionRouter } from "./domains/profession/professionRouter";

export const app = express();
const port = 8000;

app.use(express.json());

app.use(eventRouter);

app.use(professionRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
