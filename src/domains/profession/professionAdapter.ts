import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";
import { Level, Profession, Role } from "./professionTypes";

export interface IProfessionAdapter {
  createOne(data: any): Promise<void>;
  getAll(): Promise<Profession[]>;
  getOne(id: string): Promise<Profession>;
  deleteOne(id: string): Promise<void>;
  updateOne(id: string, data: any): Promise<void>;
}

export class ProfessionAdapter implements IProfessionAdapter {
  async createOne(data: any) {
    await prisma.profession.create({
      data: data,
    });
  }

  async getAll() {
    const all = await prisma.profession.findMany({
      where: { deletedAt: null },
    });
    console.log(all);
    return all;
  }

  async getOne(id: string) {
    const one = await prisma.profession.findUnique({
      where: { id: id, deletedAt: null },
    });
    if (one) {
      return one;
    }
    throw new Error(`Profession ${id} not found`);
  }

  async deleteOne(id: string) {
    await this.getOne(id);
    await prisma.profession.update({
      where: { id: id, deletedAt: null },
      data: { deletedAt: new Date() },
    });
  }

  async updateOne(id: string, data: any) {
    await this.getOne(id);
    await prisma.profession.update({
      where: { id: id, deletedAt: null },
      data: { updatedAt: new Date(), ...data },
    });
  }
}
