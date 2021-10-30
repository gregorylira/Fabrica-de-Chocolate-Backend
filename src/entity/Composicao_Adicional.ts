import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("comp_adicional")
class comp_adicional {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    produto_adicional: string;

    @Column("float")
    quantidade_liquida: number;

    @Column()
    und: string;

    @Column("float")
    custo_adicional: number;

    @Column("float")
    seu_preco: number;

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

export { comp_adicional }