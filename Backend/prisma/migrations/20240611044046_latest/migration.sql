/*
  Warnings:

  - Added the required column `name` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "name" TEXT NOT NULL;
