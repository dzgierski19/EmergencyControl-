import { IProfessionAdapter } from "./professionAdapter";
import { ProfessionToCreate, ProfessionToUpdate } from "./professionTypes";

export class professionService {
  constructor(private readonly professionAdapter: IProfessionAdapter) {}

  async createProfession(data: ProfessionToCreate) {
    await this.professionAdapter.createOne(data);
  }

  async getAllProfessions() {
    return this.professionAdapter.getAll();
  }

  async getProfession(id: string) {
    const profession = await this.professionAdapter.getOne(id);
    return profession;
  }

  async deleteProfession(id: string) {
    await this.getProfession(id);
    await this.professionAdapter.deleteOne(id);
  }

  async updateProfession(id: string, data: ProfessionToUpdate) {
    await this.getProfession(id);
    await this.professionAdapter.updateOne(id, data);
  }
}
