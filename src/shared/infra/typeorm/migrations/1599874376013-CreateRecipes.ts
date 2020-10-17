import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateRecipes1599874376013 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "recipes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "color",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "og",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "fg",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "abv",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "ibu",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "img_url",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "final_volume",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "global_efficiency",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "notes",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "short_description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "is_private",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "style_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp with time zone",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp with time zone",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("recipes");
    }
}
