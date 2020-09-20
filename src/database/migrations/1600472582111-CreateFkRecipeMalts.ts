import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFkRecipeMalts1600472582111 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "malts_recipe",
      new TableForeignKey({
        name: "malt_id",
        columnNames: ["malt_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "malts",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "malts_recipe",
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
    await queryRunner.dropForeignKey("malts_recipe", "malt_id");
    await queryRunner.dropForeignKey("malts_recipe", "recipe_id");
  }
}
