/*
  Warnings:

  - The values [PENDING] on the enum `StatusUser` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StatusUser_new" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED', 'DELETED', 'PENDING_VERIFICATION', 'PENDING_RESET_PASSWORD');
ALTER TABLE "public"."User" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "status" TYPE "StatusUser_new" USING ("status"::text::"StatusUser_new");
ALTER TYPE "StatusUser" RENAME TO "StatusUser_old";
ALTER TYPE "StatusUser_new" RENAME TO "StatusUser";
DROP TYPE "public"."StatusUser_old";
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "googleId" DROP NOT NULL;
