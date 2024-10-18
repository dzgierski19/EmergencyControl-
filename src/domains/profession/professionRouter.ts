import { Router } from "express";
import { professionController } from "../../IoC";

export const professionRouter = Router();

professionRouter.get("/professions", professionController.getProfessions);

professionRouter.get(
  "/professions/:professionId",
  professionController.getProfessions
);

professionRouter.post("/professions", professionController.createProfession);

professionRouter.put(
  "/professions/:professionId",
  professionController.updateProfession
);

professionRouter.delete(
  "/professions/:professionId",
  professionController.deleteProfession
);
