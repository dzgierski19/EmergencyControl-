/*
  Warnings:

  - You are about to drop the column `locationCheckedAt` on the `Profession` table. All the data in the column will be lost.
  - You are about to drop the column `locationLatitude` on the `Profession` table. All the data in the column will be lost.
  - You are about to drop the column `locationLongitude` on the `Profession` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `Profession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Profession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profession" DROP CONSTRAINT "Profession_locationLatitude_locationLongitude_locationChec_fkey";

-- AlterTable
ALTER TABLE "Profession" DROP COLUMN "locationCheckedAt",
DROP COLUMN "locationLatitude",
DROP COLUMN "locationLongitude",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Location";
