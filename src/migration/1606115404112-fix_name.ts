import { MigrationInterface, QueryRunner } from "typeorm";

export class fixName1606115404112 implements MigrationInterface {
    name = "fixName1606115404112";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`");
        await queryRunner.query(
            "ALTER TABLE `user` ADD `name` varchar(255) NOT NULL"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`");
        await queryRunner.query(
            "ALTER TABLE `user` ADD `lastName` varchar(255) NOT NULL"
        );
        await queryRunner.query(
            "ALTER TABLE `user` ADD `firstName` varchar(255) NOT NULL"
        );
    }
}
