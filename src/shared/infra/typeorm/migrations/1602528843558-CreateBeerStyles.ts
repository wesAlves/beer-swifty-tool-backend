import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBeerStyles1602528843558 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "beer_styles",
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
                        name: "description",
                        type: "char",
                        isNullable: true,
                    },
                    {
                        name: "short_description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "fg_initial",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "fg_final",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "og_initial",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "og_final",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "ibu_initial",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "ibu_final",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "color_initial",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "color_final",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "abv_initial",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "abv_final",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "img_url",
                        type: "varchar",
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
        await queryRunner.dropTable("beer_styles");
    }
}
