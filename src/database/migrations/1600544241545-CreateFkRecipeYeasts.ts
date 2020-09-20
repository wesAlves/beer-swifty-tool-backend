import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFkRecipeYeasts1600544241545 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "yeasts_recipe",
      new TableForeignKey({
        name: "yeast_id",
        columnNames: ["yeast_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "yeast",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "yeasts_recipe",
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
    await queryRunner.dropForeignKey("yeasts_recipe", "yeast_id");
    await queryRunner.dropForeignKey("yeasts_recipe", "recipe_id");
  }
}
