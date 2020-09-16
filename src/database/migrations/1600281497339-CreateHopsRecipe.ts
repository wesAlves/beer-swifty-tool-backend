import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHopsRecipe1600281497339 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "hops_recipe",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "hop_id",
            type: "varchar",
          },
          {
            name: "hop_quantity",
            type: "decimal",
          },
          {
            name: "hop_add_type",
            type: "decimal",
          },
          {
            name: "hop_add_time",
            type: "decimal",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("hops_recipe");
  }
}
