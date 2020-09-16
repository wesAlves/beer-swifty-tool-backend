import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateYeastsRecipe1600281482818 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    new Table({
      name: "yeasts_recipe",
      columns: [
        {
          name: "id",
          type: "varchar",
          isPrimary: true,
          generationStrategy: "uuid",
          default: "uuid_generate_v4()",
        },
        {
          name: "yeast_id",
          type: "varchar",
        },
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("yeasts_recipe");
  }
}
