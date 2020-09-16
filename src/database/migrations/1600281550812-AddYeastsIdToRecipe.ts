import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddYeastsIdToRecipe1600281550812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "recipes",
      new TableColumn({
        name: "yeasts_id",
        type: "varchar",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "yeasts_id",
        columnNames: ["yeasts_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "yeasts_recipe",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("recipes", "yeasts_id");

    await queryRunner.dropColumn("recipes", "yeasts_id");
  }
}
