import { json, Request, Response } from "express";
import { CreateInsumoService } from "../service/CreateInsumoService";


class CreateInsumoController{

    async handle(request: Request, response: Response){
        //const { produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final } = request.body
        const arr = request.body
        console.log(arr)
        var listaInsumo = []
        if (Array.isArray (arr)){
            for(var val of arr){
                const { produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final } = val
                const createInsumoService = new CreateInsumoService()
    
                const insumo = await createInsumoService.execute({produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final})
                listaInsumo.push(insumo)
            }

            return response.json(listaInsumo)
        }else{
            const { produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final } = arr
            const createInsumoService = new CreateInsumoService()
    
            const insumo = await createInsumoService.execute({produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final})

            return response.json(insumo)
        }

        
    }
}

export { CreateInsumoController }