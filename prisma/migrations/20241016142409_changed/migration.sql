/*
  Warnings:

  - You are about to drop the column `authorId` on the `Event` table. All the data in the column will be lost.
  - Added the required column `workerId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_authorId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "authorId",
ADD COLUMN     "workerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
