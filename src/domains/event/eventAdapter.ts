import { prisma } from "../../../prisma/prisma";
import { Event } from "./eventTypes";

export interface IEventAdapter {
  createOne(data: any): Promise<void>;
  getAll(): Promise<Event[]>;
  getOne(id: string): Promise<Event>;
  deleteOne(id: string): Promise<void>;
  updateOne(id: string, data: any): Promise<void>;
}

export class EventAdapter implements IEventAdapter {
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
    const one = await prisma.event.findFirst({
      where: { id: id },
    });
    if (one) {
      return one;
    }
    throw new Error(`Event ${id} not found`);
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
