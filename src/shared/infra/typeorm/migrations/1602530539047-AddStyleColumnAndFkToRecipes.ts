import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from "typeorm";

export class AddStyleColumnAndFkToRecipes1602530539047
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "recipes",
            new TableColumn({
                name: "style_id",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.createForeignKey(
            "recipes",
            new TableForeignKey({
                name: "style_id",
                columnNames: ["style_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "beer_styles",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("recipes", "style_id");
        await queryRunner.dropColumn("recipes", "style_id");
    }
}
