import { MigrationInterface, QueryRunner } from "typeorm";

export class addEmail1606107528674 implements MigrationInterface {
    name = "addEmail1606107528674";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `user` ADD `email` varchar(255) NOT NULL"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`");
    }
}
