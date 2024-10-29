import { PrismaClient } from "@prisma/client";

const processEnv = () => {
  if (process.env.NODE_ENV === "development") {
    return new PrismaClient({
      datasources: {
        db: { url: process.env.DATABASE_URL },
      },
    });
  }
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_PRISMA_URL,
      },
    },
  });
};

export const prisma = processEnv();
