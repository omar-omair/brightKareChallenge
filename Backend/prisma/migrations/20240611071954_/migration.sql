-- CreateTable
CREATE TABLE "barrier" (
    "id" TEXT NOT NULL,
    "barrier_name" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,

    CONSTRAINT "barrier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "barrier" ADD CONSTRAINT "barrier_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
