export const STATUSES = {
  WAITING_FOR_ACTION: "WAITING_FOR_ACTION",
  IN_PROGRESS: "IN_PROGRESS",
  CANCELLED: "CANCELLED",
  FINISHED: "FINISHED",
} as const;

export type Status = (typeof STATUSES)[keyof typeof STATUSES];

export const LEVELS = {
  BEGINNER: "BEGINNER",
  INTERMEDIATE: "INTERMEDIATE",
  ADVANCED: "ADVANCED",
} as const;

export type Level = (typeof LEVELS)[keyof typeof LEVELS];

export type Event = {
  id: String;
  title: String;
  additionalInfo: String | null;
  eventLevel: Level;
  status: Status;
  workerId: String;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

// export type ProfessionToCreate = Omit<
//   Profession,
//   "id" | "createdAt" | "deletedAt" | "updatedAt"
// >;

// export type ProfessionToUpdate = Partial<ProfessionToCreate>;
