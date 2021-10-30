import { Request, Response } from "express";
import { CreateComposicaoService } from "../service/CreateComposicaoService";



class CreateComposicaoController {

    async handle(request: Request, response: Response){
        const arr = request.body
        var listaComposicao = []
        
        for(var val of arr){
            const {produtoFK, ingredienteFK, quant_liqu}= val
            const createComposicaoService = new CreateComposicaoService

            const comp = await createComposicaoService.execute({produtoFK, ingredienteFK, quant_liqu})
            listaComposicao.push(comp)
        }
        
        return response.json(listaComposicao)
    }
}

export { CreateComposicaoController };