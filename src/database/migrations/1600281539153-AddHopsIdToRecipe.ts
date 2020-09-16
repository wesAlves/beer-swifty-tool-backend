import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddHopsIdToRecipe1600281539153 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "recipes",
      new TableColumn({
        name: "hops_id",
        type: "varchar",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "recipes",
      new TableForeignKey({
        name: "hops_id",
        columnNames: ["hops_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "hops_recipe",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("recipes", "hops_id");

    await queryRunner.dropColumn("recipes", "hops_id");
  }
}
