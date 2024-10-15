import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";
import { Level, Profession, Role } from "./professionTypes";

export interface IProfessionAdapter {
  createOne(data: any): Promise<void>;
  getAll(): Promise<Profession[]>;
  getOne(id: string): Promise<Profession | null>;
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
    const one = await prisma.profession.findUnique({ where: { id } });
    return one;
  }

  async deleteOne(id: string) {
    await prisma.profession.update({
      where: { id: id },
      data: { deletedAt: new Date() },
    });
  }

  async updateOne(id: string, data: any) {
    await prisma.profession.update({ where: { id: id }, data: data });
  }
}
