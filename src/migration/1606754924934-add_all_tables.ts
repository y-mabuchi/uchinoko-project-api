import { MigrationInterface, QueryRunner } from "typeorm";

export class addAllTables1606754924934 implements MigrationInterface {
    name = "addAllTables1606754924934";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `pet` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `sex` enum ('male', 'female') NOT NULL, `imagePath` varchar(255) NOT NULL, `userId` int NOT NULL, `birthday` datetime NULL DEFAULT NULL, `pickupDate` datetime NULL DEFAULT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
        await queryRunner.query(
            "CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
        await queryRunner.query(
            "CREATE TABLE `like` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NOT NULL, `petId` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB"
        );
        await queryRunner.query(
            "ALTER TABLE `pet` ADD CONSTRAINT `FK_4eb3b1eeefc7cdeae09f934f479` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
        );
        await queryRunner.query(
            "ALTER TABLE `like` ADD CONSTRAINT `FK_e8fb739f08d47955a39850fac23` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
        );
        await queryRunner.query(
            "ALTER TABLE `like` ADD CONSTRAINT `FK_a09edead80f81163914f8402ee1` FOREIGN KEY (`petId`) REFERENCES `pet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `like` DROP FOREIGN KEY `FK_a09edead80f81163914f8402ee1`"
        );
        await queryRunner.query(
            "ALTER TABLE `like` DROP FOREIGN KEY `FK_e8fb739f08d47955a39850fac23`"
        );
        await queryRunner.query(
            "ALTER TABLE `pet` DROP FOREIGN KEY `FK_4eb3b1eeefc7cdeae09f934f479`"
        );
        await queryRunner.query("DROP TABLE `like`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `pet`");
    }
}
