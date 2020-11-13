import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1605253381210 implements MigrationInterface {
    name = 'createUser1605253381210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "people" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "height" integer NOT NULL, "mass" integer NOT NULL, "homeworld" character varying(50) NOT NULL, CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "people"`);
    }

}
