import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Composition1635571945755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "composicao",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "produtoFK",
                        type: "varchar"
                    },
                    {
                        name: "ingredienteFK",
                        type: "varchar"
                    },
                    {
                        name: "quant_liqu",
                        type: "float"
                    },
                    {
                        name: "unid_medidaFK",
                        type: "varchar"
                    },
                    {
                        name: "custo_InsumoFK",
                        type: "float"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "precosSugeridos",
                        referencedColumnNames: ["id"],
                        columnNames: ["produtoFK"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "insumos",
                        referencedColumnNames: ["id"],
                        columnNames: ["ingredienteFK"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("composicao")
    }

}
