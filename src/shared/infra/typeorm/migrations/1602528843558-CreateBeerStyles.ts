import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBeerStyles1602528843558 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "beer_styles",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
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
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "history",
                        type: "varchar",
                    },
                    {
                        name: "fg",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "ibu",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "color",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "abv",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "img_url",
                        type: "varchar",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("beer_styles");
    }
}
