/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Profession` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Location" (
    "latitude" DOUBLE PRECISION NOT NULL,
    "longtitude" DOUBLE PRECISION NOT NULL,
    "checkedAt" TIMESTAMP(3) NOT NULL,
    "professionId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_professionId_key" ON "Location"("professionId");

-- CreateIndex
CREATE UNIQUE INDEX "Profession_email_key" ON "Profession"("email");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
