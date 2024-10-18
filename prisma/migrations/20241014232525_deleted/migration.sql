/*
  Warnings:

  - You are about to drop the column `locationCheckedAt` on the `Profession` table. All the data in the column will be lost.
  - You are about to drop the column `locationLatitude` on the `Profession` table. All the data in the column will be lost.
  - You are about to drop the column `locationLongtitude` on the `Profession` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profession" DROP CONSTRAINT "Profession_locationLatitude_locationLongtitude_locationChe_fkey";

-- AlterTable
ALTER TABLE "Profession" DROP COLUMN "locationCheckedAt",
DROP COLUMN "locationLatitude",
DROP COLUMN "locationLongtitude";

-- DropTable
DROP TABLE "Location";
