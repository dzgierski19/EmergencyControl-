import express from "express";
import { eventRouter } from "./domains/event/eventRouter";

export const app = express();
const port = 8000;

app.use(express.json());

app.use(eventRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
