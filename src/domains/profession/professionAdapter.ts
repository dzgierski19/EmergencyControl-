import { prisma } from "../../../prisma/prisma";
import { Level, Role } from "./professionTypes";

interface IProfessionAdapter {}

export class ProfessionAdapter implements IProfessionAdapter {
  async createOne(
    name: string,
    role: Role,
    level: Level,
    phoneNumber: number,
    email: string
  ) {
    await prisma.profession.create({
      data: {
        name: name,
        role: role,
        workerLevel: level,
        phoneNumber: phoneNumber,
        email: email,
      },
    });
  }

  async getAll() {
    const workers = await prisma.profession.findMany({});
    console.log(workers);
  }
}
