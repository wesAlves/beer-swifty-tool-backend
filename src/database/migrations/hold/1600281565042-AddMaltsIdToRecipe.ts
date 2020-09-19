import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddMaltsIdToRecipe1600281565042 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "recipes",
      new TableColumn({
        name: "malts_id",
        type: "varchar",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "malts_id",
        columnNames: ["malts_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "malts_recipe",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("recipes", "malts_id");

    await queryRunner.dropColumn("recipes", "malts_id");
  }
}
