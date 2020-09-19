import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFkHopsRecipe1600440432759 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "hops_recipe",
      new TableForeignKey({
        name: "hops_id",
        columnNames: ["hop_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "hops",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
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
    await queryRunner.dropForeignKey("hops_recipe", "hop_id");
    await queryRunner.dropForeignKey("hops_recipe", "recipe_id");
  }
}
