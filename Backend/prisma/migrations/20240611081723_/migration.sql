/*
  Warnings:

  - You are about to drop the `_diseaseTopatient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_diseaseTopatient" DROP CONSTRAINT "_diseaseTopatient_A_fkey";

-- DropForeignKey
ALTER TABLE "_diseaseTopatient" DROP CONSTRAINT "_diseaseTopatient_B_fkey";

-- DropTable
DROP TABLE "_diseaseTopatient";

-- CreateTable
CREATE TABLE "_patientDiseases" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_patientDiseases_AB_unique" ON "_patientDiseases"("A", "B");

-- CreateIndex
CREATE INDEX "_patientDiseases_B_index" ON "_patientDiseases"("B");

-- AddForeignKey
ALTER TABLE "_patientDiseases" ADD CONSTRAINT "_patientDiseases_A_fkey" FOREIGN KEY ("A") REFERENCES "disease"("disease_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_patientDiseases" ADD CONSTRAINT "_patientDiseases_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
