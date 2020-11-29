import { MigrationInterface, QueryRunner } from "typeorm";

export class addToken1606109081239 implements MigrationInterface {
    name = "addToken1606109081239";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `user` ADD `token` varchar(255) NOT NULL"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `token`");
    }
}
