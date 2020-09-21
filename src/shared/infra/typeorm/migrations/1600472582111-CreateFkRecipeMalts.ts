import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFkRecipeFermentables1600472582111
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "fermentables_recipe",
      new TableForeignKey({
        name: "fermentable_id",
        columnNames: ["fermentable_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "fermentables",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "fermentables_recipe",
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
    await queryRunner.dropForeignKey("fermentables_recipe", "fermentable_id");
    await queryRunner.dropForeignKey("fermentables_recipe", "recipe_id");
  }
}
