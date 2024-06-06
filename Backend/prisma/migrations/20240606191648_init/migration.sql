-- CreateEnum
CREATE TYPE "mesaurement_types" AS ENUM ('weight', 'blood_pressure_systolic', 'blood_pressure_diastolic');

-- CreateEnum
CREATE TYPE "gender" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'completed', 'not_Completed', 'pending');

-- CreateTable
CREATE TABLE "medical_history" (
    "history_id" TEXT NOT NULL,
    "history_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "medical_history_pkey" PRIMARY KEY ("history_id")
);

-- CreateTable
CREATE TABLE "disease" (
    "disease_id" TEXT NOT NULL,
    "disease_name" TEXT NOT NULL,
    "history_id" TEXT NOT NULL,

    CONSTRAINT "disease_pkey" PRIMARY KEY ("disease_id")
);

-- CreateTable
CREATE TABLE "measurement" (
    "measurement_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "measaurement_type" "mesaurement_types" NOT NULL,
    "measurement_value" DOUBLE PRECISION NOT NULL,
    "measaurement_unit" TEXT NOT NULL,
    "measurement_on" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "measurement_pkey" PRIMARY KEY ("measurement_id")
);

-- CreateTable
CREATE TABLE "prescribed_medication" (
    "medication_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "status" "status" NOT NULL,
    "frequency" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prescribed_medication_pkey" PRIMARY KEY ("medication_id","patient_id","start_date")
);

-- CreateTable
CREATE TABLE "medication" (
    "medication_id" TEXT NOT NULL,
    "medication_name" TEXT NOT NULL,

    CONSTRAINT "medication_pkey" PRIMARY KEY ("medication_id")
);

-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "legal_id" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "sex" "gender" NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "department_id" TEXT NOT NULL,
    "department_name" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "_doctorTopatient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "medical_history_patientId_key" ON "medical_history"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "patient_legal_id_key" ON "patient"("legal_id");

-- CreateIndex
CREATE UNIQUE INDEX "patient_username_key" ON "patient"("username");

-- CreateIndex
CREATE UNIQUE INDEX "patient_email_key" ON "patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "patient_phone_number_key" ON "patient"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "_doctorTopatient_AB_unique" ON "_doctorTopatient"("A", "B");

-- CreateIndex
CREATE INDEX "_doctorTopatient_B_index" ON "_doctorTopatient"("B");

-- AddForeignKey
ALTER TABLE "medical_history" ADD CONSTRAINT "medical_history_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disease" ADD CONSTRAINT "disease_history_id_fkey" FOREIGN KEY ("history_id") REFERENCES "medical_history"("history_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescribed_medication" ADD CONSTRAINT "prescribed_medication_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "medication"("medication_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescribed_medication" ADD CONSTRAINT "prescribed_medication_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescribed_medication" ADD CONSTRAINT "prescribed_medication_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_A_fkey" FOREIGN KEY ("A") REFERENCES "doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
