import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateFkRecipeHop1600434145583 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "hops_recipe",
        columnNames: ["hops_recipe"],
        referencedColumnNames: ["id"],
        referencedTableName: "hops_recipe",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "hops",
      new TableForeignKey({
        name: "recipes_hops",
        columnNames: ["hops_recipe"],
        referencedColumnNames: ["id"],
        referencedTableName: "hops_recipe",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("hops", "recipes_hops");
    await queryRunner.dropForeignKey("recipes", "hops_recipe");
  }
}
