/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "email" TEXT;
ALTER TABLE "User" ADD COLUMN "email_verified" BOOLEAN;
ALTER TABLE "User" ADD COLUMN "username" TEXT;

-- CreateTable
CREATE TABLE "Email_Verification_Token" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expires" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "Email_Verification_Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Password_Reset_Token" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expires" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "Password_Reset_Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
