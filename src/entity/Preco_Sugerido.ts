import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("precosSugeridos")
class Preco_Sugerido {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    produto: string;

    @Column("float")
    custo_MP: number;

    @Column("float")
    custo_total: string;

    @Column("float")
    preco_min: number;

    @Column("float")
    preco_max: number;

    @Column("float")
    preco_medio: number;

    @Column("float")
    seu_preco_venda: number;

    @Column("float")
    imposto_sob_venda: number;

    @Column("float")
    margem_contribuicao: number;

    @Column("float")
    margem_liquida: number;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id){
            this.id = uuid();
        }
    }


}

export { Preco_Sugerido }