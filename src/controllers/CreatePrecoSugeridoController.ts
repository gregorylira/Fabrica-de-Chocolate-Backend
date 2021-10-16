import { Request, Response } from "express";
import { CreatePrecoSugeridoService } from "../service/CreatePrecoSugeridoService";



class CreatePrecoSugeridoController {

    async handle (request: Request, response: Response){
        const arr = request.body
        var listaPrecosSugeridos = []

        for( var val of arr){
            const {produto,custo_MP,custo_total,preco_min,preco_max,preco_medio,seu_preco_venda,imposto_sob_venda,margem_contribuicao,margem_liquida} = val
            const createPrecoSugeridoService = new CreatePrecoSugeridoService()

            const precoProduto = await createPrecoSugeridoService.execute({produto,custo_MP,custo_total,preco_min,preco_max,preco_medio,seu_preco_venda,imposto_sob_venda,margem_contribuicao,margem_liquida})
            listaPrecosSugeridos.push(precoProduto)
        }


        return response.json(listaPrecosSugeridos)
    }
}


export { CreatePrecoSugeridoController }