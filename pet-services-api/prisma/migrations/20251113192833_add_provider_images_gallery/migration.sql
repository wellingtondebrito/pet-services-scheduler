-- CreateTable
CREATE TABLE "ProviderImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "altText" TEXT,
    "isCover" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "providerId" INTEGER NOT NULL,
    CONSTRAINT "ProviderImage_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "PetProvider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
