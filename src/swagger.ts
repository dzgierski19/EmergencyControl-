import { port } from "./main";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Emergency Control API",
      version: "1.0.0",
      description: "Express Emergency Control API",
    },
    servers: [
      { url: `http://localhost:${port}`, description: "Local Server" },
      { url: "/", description: "Live Server" },
    ],
  },
  apis: [
    "./src/domains/event/eventRouter.ts",
    "./src/domains/profession/professionRouter.ts",
  ],
};

export const swaggerSpecs = swaggerJSDoc(options);
