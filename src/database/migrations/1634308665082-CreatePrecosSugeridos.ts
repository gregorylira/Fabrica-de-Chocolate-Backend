import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePrecosSugeridos1634308665082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "precosSugeridos",
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
                        name: "custo_MP",
                        type: "float"
                    },
                    {
                        name: "custo_total",
                        type: "float"
                    },
                    {
                        name: "preco_min",
                        type: "float"
                    },
                    {
                        name: "preco_max",
                        type: "float"
                    },
                    {
                        name: "preco_medio",
                        type: "float"
                    },
                    {
                        name: "seu_preco_venda",
                        type: "float"
                    },
                    {
                        name: "imposto_sob_venda",
                        type: "float"
                    },
                    {
                        name: "margem_contribuicao",
                        type: "float"
                    },
                    {
                        name: "margem_liquida",
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("precosSugeridos")
    }

}
