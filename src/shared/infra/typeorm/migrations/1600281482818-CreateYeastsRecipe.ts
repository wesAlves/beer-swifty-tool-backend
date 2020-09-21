import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateYeastsRecipe1600281482818 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
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
            isNullable: true,
          },
          {
            name: "recipe_id",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("yeasts_recipe");
  }
}
