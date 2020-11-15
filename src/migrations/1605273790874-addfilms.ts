import {MigrationInterface, QueryRunner} from "typeorm";

export class addfilms1605273790874 implements MigrationInterface {
    name = 'addfilms1605273790874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "people" ADD "films" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "people" DROP COLUMN "films"`);
    }

}
