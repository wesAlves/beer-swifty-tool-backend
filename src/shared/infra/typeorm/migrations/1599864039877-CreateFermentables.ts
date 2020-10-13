import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateFermentables1599864039877
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "fermentables",
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
                    },
                    {
                        name: "color",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "potential",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "manufacture",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "origin",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "water_percentage",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "protein_percentage",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "diastatic_potential",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "short_description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fermentables");
    }
}
