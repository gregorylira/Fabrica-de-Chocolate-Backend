import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Insumo } from "./Insumo";
import { Preco_Sugerido } from "./Preco_Sugerido";

@Entity("composicao")
class Composicao {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  produtoFK: string;

  @JoinColumn({ name: "produtoFK" })
  @ManyToOne(()=>Preco_Sugerido,{onDelete: 'CASCADE'})
  produto: Preco_Sugerido;

  @Column()
  ingredienteFK: string;

  @JoinColumn({ name: "ingredienteFK" })
  @ManyToMany(()=>Insumo, {onDelete: 'CASCADE'})
  insumo: Insumo;

  @Column()
  quant_liqu: number;

  @Column()
  unid_medidaFK: string;

  @Column("float")
  custo_InsumoFK: number;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
      if(!this.id) this.id = uuid();
  }


}

export { Composicao };