require("express-async-errors");
import express, { NextFunction, Request, Response } from "express";
import { eventRouter } from "./domains/event/eventRouter";
import { professionRouter } from "./domains/profession/professionRouter";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();

const port = 8000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Emergency Control API",
      version: "1.0.0",
      description: "Express Emergency Control API",
    },
    servers: [{ url: `http://localhost:${port}` }],
  },
  apis: [
    "./src/main.ts",
    "./src/domains/event/eventRouter.ts",
    "./src/domains/profession/professionRouter.ts",
  ],
};

const specs = swaggerJsDoc(options);

app.use(express.json());

app.use(eventRouter);

app.use(professionRouter);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("/", (req: Request, res: Response) => {
  res.send("Express on Vercel");
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

export default app;
