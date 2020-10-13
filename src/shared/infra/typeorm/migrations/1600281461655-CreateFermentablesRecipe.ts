import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFermentablesRecipe1600281461655
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "fermentables_recipe",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "fermentable_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "recipe_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "quantity",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "potential",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "color",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fermentables_recipe");
    }
}
