import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

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
            isNullable: true,
          },
          {
            name: "recipe_id",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "hop_quantity",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "hop_add_type",
            isNullable: true,
            type: "decimal",
          },
          {
            name: "hop_add_time",
            isNullable: true,
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
