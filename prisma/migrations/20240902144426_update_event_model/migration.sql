/*
  Warnings:

  - You are about to drop the column `required` on the `EventProperty` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EventProperty" DROP COLUMN "required";

-- AlterTable
ALTER TABLE "EventTypeAttribute" ADD COLUMN     "hasBigContent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "required" BOOLEAN NOT NULL DEFAULT true;
