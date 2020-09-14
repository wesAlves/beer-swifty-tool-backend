import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { uuid } from "uuidv4";

export class CreateHops1599873433866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "hops",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "hopName",
            type: "varchar",
          },
          {
            name: "hopType",
            type: "varchar",
          },
          {
            name: "hopAlphaAcid",
            type: "decimal",
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
    await queryRunner.dropTable("hops");
  }
}
