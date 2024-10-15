/*
  Warnings:

  - You are about to drop the column `currentEvent` on the `Profession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profession" DROP COLUMN "currentEvent",
ADD COLUMN     "currentEventId" TEXT;
