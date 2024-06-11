/*
  Warnings:

  - You are about to drop the column `patientId` on the `medical_history` table. All the data in the column will be lost.
  - Added the required column `patient_id` to the `medical_history` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "medical_history" DROP CONSTRAINT "medical_history_patientId_fkey";

-- DropIndex
DROP INDEX "medical_history_patientId_key";

-- AlterTable
ALTER TABLE "medical_history" DROP COLUMN "patientId",
ADD COLUMN     "patient_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "medical_history" ADD CONSTRAINT "medical_history_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
