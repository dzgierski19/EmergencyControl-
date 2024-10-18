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

export const NUMBER_LEVEL_MAPPER: Record<Level, number> = {
  [LEVELS.BEGINNER]: 1,
  [LEVELS.INTERMEDIATE]: 2,
  [LEVELS.ADVANCED]: 3,
};

export type Event = {
  id: string;
  title: string;
  additionalInfo?: string | null;
  eventLevel: Level;
  status?: Status;
  workerId?: string | null;
  isAccepted: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export type EventToCreate = Omit<
  Event,
  "id" | "createdAt" | "deletedAt" | "updatedAt"
>;

export type EventToUpdate = Partial<EventToCreate>;
