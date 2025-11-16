-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_userId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_petOwnerId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_providerId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_petProviderId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "PetOwner" DROP CONSTRAINT "PetOwner_userId_fkey";

-- DropForeignKey
ALTER TABLE "PetProvider" DROP CONSTRAINT "PetProvider_userId_fkey";

-- DropForeignKey
ALTER TABLE "PlanService" DROP CONSTRAINT "PlanService_planId_fkey";

-- DropForeignKey
ALTER TABLE "PlanService" DROP CONSTRAINT "PlanService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ProviderImage" DROP CONSTRAINT "ProviderImage_providerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_petOwnerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_providerId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_providerId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_serviceTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Signatures" DROP CONSTRAINT "Signatures_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Signatures" DROP CONSTRAINT "Signatures_planId_fkey";

-- DropForeignKey
ALTER TABLE "SubscriptionPlan" DROP CONSTRAINT "SubscriptionPlan_providerId_fkey";

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetOwner" ADD CONSTRAINT "PetOwner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_petProviderId_fkey" FOREIGN KEY ("petProviderId") REFERENCES "PetProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetProvider" ADD CONSTRAINT "PetProvider_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "PetOwner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "PetProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "PetProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_petOwnerId_fkey" FOREIGN KEY ("petOwnerId") REFERENCES "PetOwner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_petOwnerId_fkey" FOREIGN KEY ("petOwnerId") REFERENCES "PetOwner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "PetProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderImage" ADD CONSTRAINT "ProviderImage_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "PetProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscriptionPlan" ADD CONSTRAINT "SubscriptionPlan_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "PetProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanService" ADD CONSTRAINT "PlanService_planId_fkey" FOREIGN KEY ("planId") REFERENCES "SubscriptionPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanService" ADD CONSTRAINT "PlanService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signatures" ADD CONSTRAINT "Signatures_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "PetOwner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signatures" ADD CONSTRAINT "Signatures_planId_fkey" FOREIGN KEY ("planId") REFERENCES "SubscriptionPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
