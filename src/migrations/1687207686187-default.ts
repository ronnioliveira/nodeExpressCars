import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687207686187 implements MigrationInterface {
    name = 'Default1687207686187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "name" text NOT NULL, "model" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "assembler_id" integer, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assemblers" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_9dcf294b7777cbfae4f62971778" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_7db3b7a53ab63ec6d2b28907812" FOREIGN KEY ("assembler_id") REFERENCES "assemblers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_7db3b7a53ab63ec6d2b28907812"`);
        await queryRunner.query(`DROP TABLE "assemblers"`);
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
