import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInsumos1632683563372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "insumos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "produto",
                        type: "varchar"
                    },
                    {
                        name: "medida",
                        type: "int"
                    },
                    {
                        name: "und",
                        type: "varchar"
                    },
                    {
                        name: "custo_rede",
                        type: "float"
                    },
                    {
                        name: "custo",
                        type: "float",
                        default: "null"
                    },
                    {
                        name: "custo_atual",
                        type: "float"
                    },
                    {
                        name: "aproveitamento",
                        type: "float"
                    },
                    {
                        name: "custo_real",
                        type: "float"
                    },
                    {
                        name: "custo_final",
                        type: "float"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }  
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("insumos")
    }

}
