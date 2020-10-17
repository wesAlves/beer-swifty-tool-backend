import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from "typeorm";
import { uuid } from "uuidv4";

export class AddUserIdToRecipe1600281397124 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "recipes",
            new TableForeignKey({
                name: "user_id",
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("recipes", "user_id");
    }
}
