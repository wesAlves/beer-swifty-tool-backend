import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateMalts1599864039877 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "malts",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "malt_name",
            type: "varchar",
          },
          {
            name: "malt_color",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "malt_potential",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "malts_recipe",
            type: "varchar",
            isNullable: true,
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
    await queryRunner.dropTable("malts");
  }
}
