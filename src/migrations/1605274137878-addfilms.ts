import {MigrationInterface, QueryRunner} from "typeorm";

export class addfilms1605274137878 implements MigrationInterface {
    name = 'addfilms1605274137878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "people" ALTER COLUMN "films" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "people"."films" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "people"."films" IS NULL`);
        await queryRunner.query(`ALTER TABLE "people" ALTER COLUMN "films" SET NOT NULL`);
    }

}
