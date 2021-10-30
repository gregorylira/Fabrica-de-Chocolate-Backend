import { Request, Response } from "express";
import { ModifyPrecoSugeridoService } from "../service/ModifyPrecoSugeridoService";



class ModifyPrecoSugeridoController{

    async handle(request: Request, response: Response){
        const {produto, custo_MP, custo_total, preco_min, preco_max, preco_medio, seu_preco_venda, imposto_sob_venda, margem_contribuicao, margem_liquida } = request.body;
        const precoSugeridoService = new ModifyPrecoSugeridoService();
        const produtoModificado = await precoSugeridoService.execute({  produto, custo_MP, custo_total, preco_min, preco_max, preco_medio, seu_preco_venda, imposto_sob_venda, margem_contribuicao, margem_liquida });

        return response.status(200).json(produtoModificado);
    }
}


export { ModifyPrecoSugeridoController };