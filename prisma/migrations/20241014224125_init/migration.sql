-- CreateEnum
CREATE TYPE "Role" AS ENUM ('POLICEMAN', 'FIREFIGHTER', 'PARAMEDIC');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('WAITING_FOR_ACTION', 'IN_PROGRESS', 'CANCELLED', 'FINISHED');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateTable
CREATE TABLE "Profession" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "workerLevel" "Level" NOT NULL,
    "currentEvent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "locationLatitude" DOUBLE PRECISION NOT NULL,
    "locationLongtitude" DOUBLE PRECISION NOT NULL,
    "locationCheckedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "eventLevel" "Level" NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'WAITING_FOR_ACTION',
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "latitude" DOUBLE PRECISION NOT NULL,
    "longtitude" DOUBLE PRECISION NOT NULL,
    "checkedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("latitude","longtitude","checkedAt")
);

-- AddForeignKey
ALTER TABLE "Profession" ADD CONSTRAINT "Profession_locationLatitude_locationLongtitude_locationChe_fkey" FOREIGN KEY ("locationLatitude", "locationLongtitude", "locationCheckedAt") REFERENCES "Location"("latitude", "longtitude", "checkedAt") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
