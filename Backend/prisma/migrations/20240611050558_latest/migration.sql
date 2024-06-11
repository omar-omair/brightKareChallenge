/*
  Warnings:

  - Added the required column `dosage` to the `prescribed_medication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prescribed_medication" ADD COLUMN     "dosage" TEXT NOT NULL;
