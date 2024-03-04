-- DropForeignKey
ALTER TABLE `estoque` DROP FOREIGN KEY `Estoque_prod_id_fkey`;

-- AddForeignKey
ALTER TABLE `Estoque` ADD CONSTRAINT `Estoque_prod_id_fkey` FOREIGN KEY (`prod_id`) REFERENCES `Produto`(`cod_prod`) ON DELETE RESTRICT ON UPDATE CASCADE;
