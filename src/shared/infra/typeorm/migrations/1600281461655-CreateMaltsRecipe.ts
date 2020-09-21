import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFermentablesRecipe1600281461655
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "fermentables_recipe",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "fermentable_id",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "recipe_id",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fermentable_quantity",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "fermentable_potential",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "fermentable_color",
            type: "decimal",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("fermentables_recipe");
  }
}
