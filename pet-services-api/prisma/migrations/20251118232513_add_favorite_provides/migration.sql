/*
  Warnings:

  - You are about to drop the `_FavoriteProviders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FavoriteProviders" DROP CONSTRAINT "_FavoriteProviders_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteProviders" DROP CONSTRAINT "_FavoriteProviders_B_fkey";

-- DropTable
DROP TABLE "_FavoriteProviders";

-- CreateTable
CREATE TABLE "FavoriteProviders" (
    "id" SERIAL NOT NULL,
    "petOwnerId" INTEGER NOT NULL,
    "petProviderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "FavoriteProviders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteProviders_petOwnerId_petProviderId_key" ON "FavoriteProviders"("petOwnerId", "petProviderId");

-- AddForeignKey
ALTER TABLE "FavoriteProviders" ADD CONSTRAINT "FavoriteProviders_petOwnerId_fkey" FOREIGN KEY ("petOwnerId") REFERENCES "PetOwner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteProviders" ADD CONSTRAINT "FavoriteProviders_petProviderId_fkey" FOREIGN KEY ("petProviderId") REFERENCES "PetProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;
