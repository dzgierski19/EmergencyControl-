import { IProfessionAdapter } from "./professionAdapter";
import { ProfessionToCreate } from "./professionTypes";

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
    if (profession) {
      return profession;
    }
    throw new Error(`Profession with ${id} not found`);
  }

  async deleteProfession(id: string) {
    await this.getProfession(id);
    await this.professionAdapter.deleteOne(id);
  }

  async updateProfession(id: string, data: ProfessionToCreate) {
    await this.getProfession(id);
    await this.professionAdapter.updateOne(id, data);
  }
}
