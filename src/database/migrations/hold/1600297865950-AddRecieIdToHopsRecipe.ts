import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddRecieIdToHopsRecipe1600297865950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "hops_recipe",
      new TableColumn({
        name: "recipe_id",
        type: "varchar",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "hops_recipe",
      new TableForeignKey({
        name: "recipe_id",
        columnNames: ["recipe_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "recipes",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("hops_recipe", "recipe_id");

    await queryRunner.dropColumn("hops_recipe", "recipe_id");
  }
}
