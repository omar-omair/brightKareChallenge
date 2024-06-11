-- AddForeignKey
ALTER TABLE "measurement" ADD CONSTRAINT "measurement_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
