import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { InsumoRepositories } from "../repositories/InsumosRepositories";
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories";
import { CreateComposicaoService } from "../service/CreateComposicaoService";



class CreateComposicaoController {

    async handle(request: Request, response: Response){
        const arr = request.body
        var listaComposicao = []
        
        if(Array.isArray(arr)){
            for(var val of arr){
                const {produtoFK, ingredienteFK, quant_liqu}= val
                const createComposicaoService = new CreateComposicaoService

                const comp = await createComposicaoService.execute({produtoFK, ingredienteFK, quant_liqu})
                listaComposicao.push(comp)
            }
            
            return response.json(listaComposicao)
        }
        else{
            var {produtoFK, ingredienteFK, quant_liqu}= arr

            const precoSugeridoRepositories = getCustomRepository(PrecoSugeridoRepositories)
            const produto = await precoSugeridoRepositories.findOne({ where: { produto:produtoFK } })


            const ingredienteRespositorie = getCustomRepository(InsumoRepositories)
            const ingrediente = await ingredienteRespositorie.findOne({ where: { produto:ingredienteFK } })


            const createComposicaoService = new CreateComposicaoService

            produtoFK = produto.id
            ingredienteFK = ingrediente.id


            const comp = await createComposicaoService.execute({produtoFK, ingredienteFK, quant_liqu})
            const composicao = {
                produtoFK: produto.produto,
                ingredienteFK: ingrediente.produto,
                quant_liqu: comp.quant_liqu,
                unid_medidaFK: comp.unid_medidaFK,
                custo_insumoFK: comp.custo_InsumoFK,
            }
            return response.json(composicao)
        }
    }
}

export { CreateComposicaoController };