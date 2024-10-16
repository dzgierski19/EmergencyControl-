import { IProfessionAdapter } from "./professionAdapter";
import {
  Level,
  NUMBER_LEVEL_MAPPER,
  Profession,
  ProfessionToCreate,
  ProfessionToUpdate,
} from "./professionTypes";

export interface IProfessionService {
  createProfession(data: ProfessionToCreate): Promise<void>;
  getAllProfessions(): Promise<Profession[]>;
  getProfession(id: string): Promise<Profession>;
  getProfessionsByLevel(level: Level): Promise<Profession[]>;
  deleteProfession(id: string): Promise<void>;
  updateProfession(id: string, data: ProfessionToUpdate): Promise<void>;
}

export class ProfessionService implements IProfessionService {
  constructor(private readonly professionAdapter: IProfessionAdapter) {}

  async createProfession(data: ProfessionToCreate) {
    await this.professionAdapter.createOne(data);
  }

  async getAllProfessions() {
    return await this.professionAdapter.getAll();
  }

  async getProfession(id: string) {
    const profession = await this.professionAdapter.getOne(id);
    return profession;
  }

  async getProfessionsByLevel(level: Level) {
    const all = await this.getAllProfessions();
    return all.filter((profession) => {
      return this.compareLevels(profession.workerLevel, level);
    });
  }

  async deleteProfession(id: string) {
    await this.getProfession(id);
    await this.professionAdapter.deleteOne(id);
  }

  async updateProfession(id: string, data: ProfessionToUpdate) {
    await this.getProfession(id);
    await this.professionAdapter.updateOne(id, data);
  }

  private compareLevels(professionLevel: Level, eventLevel: Level): boolean {
    return (
      NUMBER_LEVEL_MAPPER[professionLevel] >= NUMBER_LEVEL_MAPPER[eventLevel]
    );
  }
}
