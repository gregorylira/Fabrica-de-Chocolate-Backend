import { getCustomRepository, getRepository } from "typeorm"
import { Composicao } from "../entity/Composicao"
import { InsumoRepositories } from "../repositories/InsumosRepositories"
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories"

interface ITratamentoListaComposicao {
    ingrediente: string,
    quant_liqu: number,
    unid_medidaFK: number,
    custo_insumoFK: number
}

class TratamentoListaComposicao {

    async execute (lista:Composicao[]){

        var listaComposicao = []

        for( var val of lista){
            const {produtoFK, ingredienteFK, quant_liqu, unid_medidaFK, custo_InsumoFK} = val
            const insumoRepository = getCustomRepository(InsumoRepositories)
            const precoSugeridoFK = getCustomRepository(PrecoSugeridoRepositories)

            const insumo = await insumoRepository.findOne({
                id: ingredienteFK
            })

            const produto = await precoSugeridoFK.findOne({
                id: produtoFK
            })

            const compo = {
                ingrediente: insumo.produto,
                quant_liqu: quant_liqu,
                unid_medidaFK: unid_medidaFK,
                custo_insumoFK: custo_InsumoFK
            }
            
            listaComposicao.push(compo)
        }


        return (listaComposicao)
    }
}


export { TratamentoListaComposicao };