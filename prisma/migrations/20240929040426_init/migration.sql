/*
  Warnings:

  - Added the required column `updatedAt` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Lead_email_key";

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
