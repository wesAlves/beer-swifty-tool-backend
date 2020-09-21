import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";
import { uuid } from "uuidv4";

export class AddUserIdToRecipe1600281397124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "recipes",
      new TableColumn({
        name: "owner_id",
        type: "varchar",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "owner_id",
        columnNames: ["owner_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("recipes", "owner_id");
    await queryRunner.dropColumn("recipes", "owner_id");
  }
}
