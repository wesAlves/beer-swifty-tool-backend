import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateFermentables1599864039877
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "fermentables",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "fermentable_name",
            type: "varchar",
          },
          {
            name: "fermentable_color",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "fermentable_potential",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("fermentables");
  }
}
