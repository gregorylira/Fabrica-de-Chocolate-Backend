import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("insumos")
class Insumo {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    produto: string;

    @Column("int")
    medida: number;

    @Column()
    und: string;

    @Column("float")
    custo_rede: number;

    @Column("float")
    custo: number;

    @Column("float")
    custo_atual: number;

    @Column("float")
    aproveitamento: number;

    @Column("float")
    custo_real: number;

    @Column("float")
    custo_final: number;

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

export { Insumo }