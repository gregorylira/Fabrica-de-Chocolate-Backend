import { getCustomRepository } from "typeorm"
import { ComposicaoRepository } from "../repositories/ComposicaoRepositories";
import { InsumoRepositories } from "../repositories/InsumosRepositories"
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories"


interface IComposicao{
    produtoFK: string;
    ingredienteFK: string;
    quant_liqu: number;
}

class CreateComposicaoService {
    async execute({produtoFK, ingredienteFK, quant_liqu}: IComposicao){
        const precoSugeridoRepositories = getCustomRepository(PrecoSugeridoRepositories);
        const Insumo = getCustomRepository(InsumoRepositories);
        const produtoPrecoSugerido = await precoSugeridoRepositories.findOne(produtoFK)
        
        const ingredienteInsumo = await Insumo.findOne(ingredienteFK)


        const calc_cust = (quant_liqu*ingredienteInsumo.custo_final).toFixed(2)
        const composicao = getCustomRepository(ComposicaoRepository)
        const comp = composicao.create({
            produtoFK,
            ingredienteFK,
            quant_liqu,
            unid_medidaFK: ingredienteInsumo.und,
            custo_InsumoFK: Number(calc_cust),
        })

        await composicao.save(comp)

        return comp;
    }
}


export { CreateComposicaoService }