/*
  Warnings:

  - You are about to drop the column `quantidadeVendida` on the `estoque` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `estoque` DROP COLUMN `quantidadeVendida`,
    ADD COLUMN `quantidade` INTEGER NOT NULL DEFAULT 0;
