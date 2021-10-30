import { Request, Response } from "express";
import { ModifyComposicaoProdutoService } from "../service/ModifyComposicaoProdutoService";



class ModifyComposicaoProdutoController {

    async handle(request: Request, response: Response){
        const {produtoFK, ingredienteFK, quant_liqu} = request.body;

        const composicaoProdutoService = new ModifyComposicaoProdutoService();
        const composicaoModificada = await composicaoProdutoService.execute({produtoFK, ingredienteFK, quant_liqu});
    
        return response.status(200).json(composicaoModificada);
    }

}


export { ModifyComposicaoProdutoController };