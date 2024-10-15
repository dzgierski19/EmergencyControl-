export const ROLES = {
  POLICEMAN: "POLICEMAN",
  FIREFIGHTER: "FIREFIGHTER",
  PARAMEDIC: "PARAMEDIC",
  SOLDIER: "SOLDIER",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const LEVELS = {
  BEGINNER: "BEGINNER",
  INTERMEDIATE: "INTERMEDIATE",
  ADVANCED: "ADVANCED",
} as const;

export type Level = (typeof LEVELS)[keyof typeof LEVELS];

export type Profession = {
  id: string;
  name: string;
  role: Role;
  workerLevel: Level;
  email: string;
  phoneNumber: number;
  currentEventId: string | null;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date | null;
};

export type ProfessionToCreate = Omit<
  Profession,
  "id" | "createdAt" | "deletedAt" | "updatedAt"
>;

export type ProfessionToUpdate = Partial<ProfessionToCreate>;
