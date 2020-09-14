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
            name: "maltName",
            type: "varchar",
          },
          {
            name: "maltColor",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "maltPotential",
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
    await queryRunner.dropTable("malts");
  }
}
