import { Profession } from "../profession/professionTypes";

export const ROLES = {
  POLICEMAN: "POLICEMAN",
  FIREFIGHTER: "FIREFIGHTER",
  PARAMEDIC: "PARAMEDIC",
  SOLDIER: "SOLDIER",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const VEHICLE_TYPES = {
  MOTORCYCLE: "MOTORCYCLE",
  CAR: "CAR",
  HELICOPTER: "HELICOPTER",
  MOTORBOAT: "MOTORBOAT",
} as const;

export type VehicleType = (typeof VEHICLE_TYPES)[keyof typeof VEHICLE_TYPES];

export type Vehicle = {
  id: string;
  role: Role;
  type: VehicleType;
  seats: number;
  emptySeats: number;
  isAvailable?: boolean;
  profession?: Profession[];
  location?: Location;
  createdAt: Date;
  deletedAt?: Date | null;
  updatedAt?: Date | null;
};

export type VehicleToCreate = Omit<
  Vehicle,
  "id" | "createdAt" | "deletedAt" | "updatedAt"
>;

export type VehicleToUpdate = Partial<VehicleToCreate>;

export type Location = {
  id: string;
  latitude: number;
  longitude: number;
  checkedAt?: Date;
};
