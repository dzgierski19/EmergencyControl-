export const ROLES = {
  POLICEMAN: "POLICEMAN",
  FIREFIGHTER: "FIREFIGHTER",
  PARAMEDIC: "PARAMEDIC",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const LEVELS = {
  BEGINNER: "BEGINNER",
  INTERMEDIATE: "INTERMEDIATE",
  ADVANCED: "ADVANCED",
} as const;

export type Level = (typeof LEVELS)[keyof typeof LEVELS];
