import { IVehicleAdapter } from "./vehicleAdapter";
import { VehicleToCreate, VehicleToUpdate, VehicleType } from "./vehicleTypes";

export interface IVehicleService {}

export class VehicleService implements IVehicleService {
  constructor(private readonly vehicleAdapter: IVehicleAdapter) {}

  async createVehicle(data: VehicleToCreate) {
    await this.vehicleAdapter.createOne(data);
  }

  async getAllVehicles() {
    return await this.vehicleAdapter.getAll();
  }

  async getVehicle(id: string) {
    const vehicle = await this.vehicleAdapter.getOne(id);
    return vehicle;
  }

  async getAvailableVehiclesByType(type: string) {
    const availableVehicles = await this.getAvailableVehicles();
    return availableVehicles.filter((vehicles) => vehicles.type === type);
  }

  async getAvailableVehicles() {
    const vehicles = await this.vehicleAdapter.getAll();
    return vehicles.filter((vehicle) => vehicle.isAvailable === true);
  }

  async getVehiclesByType(type: VehicleType) {
    const vehicles = await this.vehicleAdapter.getAll();
    return vehicles.filter((vehicles) => vehicles.type === type);
  }

  async deleteVehicle(id: string) {
    await this.getVehicle(id);
    await this.vehicleAdapter.deleteOne(id);
  }

  async updateVehicle(id: string, data: VehicleToUpdate) {
    await this.getVehicle(id);
    await this.vehicleAdapter.updateOne(id, data);
  }
}
