import express, { Request, Response } from "express";
import { eventRouter } from "./domains/event/eventRouter";
import { professionRouter } from "./domains/profession/professionRouter";

const app = express();
const port = 8000;

app.use(express.json());

app.use(eventRouter);

app.use(professionRouter);

app.get("/", (req: Request, res: Response) => {
  res.json("hello from Vercel");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
