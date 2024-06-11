-- CreateTable
CREATE TABLE "_diseaseTopatient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_diseaseTopatient_AB_unique" ON "_diseaseTopatient"("A", "B");

-- CreateIndex
CREATE INDEX "_diseaseTopatient_B_index" ON "_diseaseTopatient"("B");

-- AddForeignKey
ALTER TABLE "_diseaseTopatient" ADD CONSTRAINT "_diseaseTopatient_A_fkey" FOREIGN KEY ("A") REFERENCES "disease"("disease_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_diseaseTopatient" ADD CONSTRAINT "_diseaseTopatient_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
