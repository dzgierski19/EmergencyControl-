import { prisma } from "../../../prisma/prisma";
import { Event } from "./eventTypes";

export interface IProfessionAdapter {
  createOne(data: any): Promise<void>;
  getAll(): Promise<Event[]>;
  getOne(id: string): Promise<Event>;
  getAllByWorkerId(id: string): Promise<Event[]>;
  deleteOne(id: string): Promise<void>;
  updateOne(id: string, data: any): Promise<void>;
}

export class ProfessionAdapter implements IProfessionAdapter {
  async createOne(data: any) {
    await prisma.event.create({
      data: data,
    });
  }

  async getAll() {
    const all = await prisma.event.findMany({
      where: { deletedAt: null },
    });
    console.log(all);
    return all;
  }

  async getOne(id: string) {
    const one = await prisma.event.findUnique({
      where: { id: id, deletedAt: null },
    });
    if (one) {
      return one;
    }
    throw new Error(`Event ${id} not found`);
  }

  async getAllByWorkerId(id: string) {
    const all = await prisma.event.findMany({
      where: { deletedAt: null, workerId: id },
    });
    console.log(all);
    return all;
  }

  async deleteOne(id: string) {
    await this.getOne(id);
    await prisma.event.update({
      where: { id: id, deletedAt: null },
      data: { deletedAt: new Date() },
    });
  }

  async updateOne(id: string, data: any) {
    await this.getOne(id);
    await prisma.event.update({
      where: { id: id, deletedAt: null },
      data: { updatedAt: new Date(), ...data },
    });
  }
}
