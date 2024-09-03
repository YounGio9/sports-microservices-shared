/*
  Warnings:

  - Added the required column `label` to the `EventTypeAttribute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventTypeAttribute" ADD COLUMN     "label" TEXT NOT NULL;
