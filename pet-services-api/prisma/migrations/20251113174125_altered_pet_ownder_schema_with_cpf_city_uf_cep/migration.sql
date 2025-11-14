/*
  Warnings:

  - Added the required column `cep` to the `PetOwner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `PetOwner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `PetOwner` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PetOwner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cpf" TEXT,
    "avatarUrl" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "PetOwner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PetOwner" ("address", "avatarUrl", "id", "name", "phoneNumber", "userId") SELECT "address", "avatarUrl", "id", "name", "phoneNumber", "userId" FROM "PetOwner";
DROP TABLE "PetOwner";
ALTER TABLE "new_PetOwner" RENAME TO "PetOwner";
CREATE UNIQUE INDEX "PetOwner_userId_key" ON "PetOwner"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
