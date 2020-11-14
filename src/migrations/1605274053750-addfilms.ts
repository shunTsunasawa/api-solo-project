import {MigrationInterface, QueryRunner} from "typeorm";

export class addfilms1605274053750 implements MigrationInterface {
    name = 'addfilms1605274053750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "people" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "height" integer NOT NULL, "mass" integer NOT NULL, "homeworld" character varying(50) NOT NULL, "films" text NOT NULL, CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "people"`);
    }

}
