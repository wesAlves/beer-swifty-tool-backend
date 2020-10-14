import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";
import { uuid } from "uuidv4";

export class CreateHops1599873433866 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "hops",
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
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "alpha_acid",
                        type: "decimal",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "origin",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "cohulome",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "oil_total",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "beta_acid",
                        type: "decimal",
                        isNullable: true,
                    },
                    {
                        name: "short_description",
                        type: "decimal",
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
        await queryRunner.dropTable("hops");
    }
}
