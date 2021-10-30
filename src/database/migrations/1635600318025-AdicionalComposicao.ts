import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AdicionalComposicao1635600318025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comp_adicional",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "produto_adicional",
                        type: "varchar"
                    },
                    {
                        name: "quantidade_liquida",
                        type: "float"
                    },
                    {
                        name: "und",
                        type: "varchar"
                    },
                    {
                        name: "custo_adicional",
                        type: "float"
                    },
                    {
                        name: "seu_preco",
                        type: "float",
                        default: "null"
                    },
                    {
                        name: "imposto_sob_venda",
                        type: "float",
                        default: "null"
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("comp_adicional")
    }

}
