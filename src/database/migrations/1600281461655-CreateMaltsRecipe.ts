import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMaltsRecipe1600281461655 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "malts_recipe",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "malt_id",
            type: "varchar",
          },
          {
            name: "malt_quantity",
            type: "number",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("malts_recipe");
  }
}
