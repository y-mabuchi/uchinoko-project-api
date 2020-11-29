import { MigrationInterface, QueryRunner } from "typeorm";

export class addPassword1606103689171 implements MigrationInterface {
    name = "addPassword1606103689171";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `user` ADD `password` varchar(255) NOT NULL"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`");
    }
}
