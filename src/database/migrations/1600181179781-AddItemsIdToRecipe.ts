import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddItemsIdToRecipe1600181179781 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "recipes",
      new TableColumn({
        name: "malt_id",
        type: "varchar",
        isNullable: true,
      })
    );
    await queryRunner.addColumn(
      "recipes",
      new TableColumn({
        name: "yeast_id",
        type: "varchar",
        isNullable: true,
      })
    );

    await queryRunner.addColumn(
      "recipes",
      new TableColumn({
        name: "hop_id",
        type: "varchar",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "maltsRecipe",
        columnNames: ["malt_id"],
        referencedTableName: "malts",
        referencedColumnNames: ["id"],
      })
    );
    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "hopsRecipe",
        columnNames: ["hop_id"],
        referencedTableName: "hops",
        referencedColumnNames: ["id"],
      })
    );
    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "yeastRecipe",
        columnNames: ["yeast_id"],
        referencedTableName: "yeast",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("recipes", "yeastRecipe");
    await queryRunner.dropForeignKey("recipes", "hopsRecipe");
    await queryRunner.dropForeignKey("recipes", "maltsRecipe");

    await queryRunner.dropColumn("recipes", "hop_id");
    await queryRunner.dropColumn("recipes", "yeast_id");
    await queryRunner.dropColumn("recipes", "malt_id");
  }
}
