import { IProfessionService } from "./professionService";
import { Request, Response } from "express";

export class ProfessionController {
  constructor(private readonly professionService: IProfessionService) {}

  getProfessions = async (req: Request, res: Response) => {
    const all = await this.professionService.getAllProfessions();
    console.log(all);
    res.status(200).json(all);
  };

  getProfession = async (req: Request, res: Response) => {
    const professionId = req.params.id;
    const profession = await this.professionService.getProfession(professionId);
    res.status(200).json(profession);
  };

  createProfession = async (req: Request, res: Response) => {
    const data = req.body;
    await this.professionService.createProfession(data);
    res.status(201).json(data);
  };

  deleteProfession = async (req: Request, res: Response) => {
    const professionId = req.params.id;
    await this.professionService.deleteProfession(professionId);
    res.status(204).json({ message: "Profession deleted successfully" });
  };

  updateProfession = async (req: Request, res: Response) => {
    const professionId = req.params.id;
    const data = req.body;
    await this.professionService.updateProfession(professionId, data);
    res.status(200).json({ message: "Profession updated successfully" });
  };
}

//
