import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateHopsRecipe1600281497339 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "hops_recipe",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "hop_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "name",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "recipe_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "alpha_acid",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "quantity",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "type",
                        isNullable: true,
                        type: "varchar",
                    },
                    {
                        name: "add_type",
                        isNullable: true,
                        type: "varchar",
                    },
                    {
                        name: "add_time",
                        isNullable: true,
                        type: "decimal",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("hops_recipe");
    }
}
