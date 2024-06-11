/*
  Warnings:

  - You are about to drop the column `history_id` on the `disease` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "disease" DROP CONSTRAINT "disease_history_id_fkey";

-- AlterTable
ALTER TABLE "disease" DROP COLUMN "history_id";

-- CreateTable
CREATE TABLE "_diseaseTomedical_history" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_diseaseTomedical_history_AB_unique" ON "_diseaseTomedical_history"("A", "B");

-- CreateIndex
CREATE INDEX "_diseaseTomedical_history_B_index" ON "_diseaseTomedical_history"("B");

-- AddForeignKey
ALTER TABLE "_diseaseTomedical_history" ADD CONSTRAINT "_diseaseTomedical_history_A_fkey" FOREIGN KEY ("A") REFERENCES "disease"("disease_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_diseaseTomedical_history" ADD CONSTRAINT "_diseaseTomedical_history_B_fkey" FOREIGN KEY ("B") REFERENCES "medical_history"("history_id") ON DELETE CASCADE ON UPDATE CASCADE;
