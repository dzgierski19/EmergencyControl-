import { prisma } from "../../../prisma/prisma";
import { Vehicle } from "./vehicleTypes";

export interface IVehicleAdapter {
  createOne(data: any): Promise<void>;
  getAll(): Promise<Vehicle[]>;
  getOne(id: string): Promise<Vehicle>;
  deleteOne(id: string): Promise<void>;
  updateOne(id: string, data: any): Promise<void>;
}

export class VehicleAdapter implements IVehicleAdapter {
  async createOne(data: any) {
    await prisma.vehicle.create({
      data: data,
    });
  }

  async getAll() {
    const all = await prisma.vehicle.findMany({
      where: { deletedAt: null },
    });
    console.log(all);
    return all;
  }

  async getOne(id: string) {
    const one = await prisma.vehicle.findFirst({
      where: { id: id },
    });
    if (one) {
      return one;
    }
    throw new Error(`Vehicle ${id} not found`);
  }

  async deleteOne(id: string) {
    await this.getOne(id);
    await prisma.vehicle.update({
      where: { id: id, deletedAt: null },
      data: { deletedAt: new Date() },
    });
  }

  async updateOne(id: string, data: any) {
    await this.getOne(id);
    await prisma.vehicle.update({
      where: { id: id, deletedAt: null },
      data: { updatedAt: new Date(), ...data },
    });
  }
}
