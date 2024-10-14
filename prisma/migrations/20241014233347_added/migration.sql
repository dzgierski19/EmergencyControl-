-- AlterTable
ALTER TABLE "Profession" ADD COLUMN     "locationCheckedAt" TIMESTAMP(3),
ADD COLUMN     "locationLatitude" DOUBLE PRECISION,
ADD COLUMN     "locationLongitude" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Location" (
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "checkedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("latitude","longitude","checkedAt")
);

-- AddForeignKey
ALTER TABLE "Profession" ADD CONSTRAINT "Profession_locationLatitude_locationLongitude_locationChec_fkey" FOREIGN KEY ("locationLatitude", "locationLongitude", "locationCheckedAt") REFERENCES "Location"("latitude", "longitude", "checkedAt") ON DELETE SET NULL ON UPDATE CASCADE;
