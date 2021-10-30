import { Request, Response } from "express";
import { CreateComposicaoAdicionalService } from "../service/CreateComposicaoAdicionalService";


class CreateComposicaoAdicionalController{
    async handle(request: Request, response: Response){
        const arr = request.body;
        var listaCompAdicional = [];

        for(var val of arr){
            const {produto_adicional, quantidade_liquida, und, custo_adicional, seu_preco, imposto_sob_venda, margem_contribuicao, margem_liquida} = val;
            const composicaoAdicionalService = new CreateComposicaoAdicionalService();
            
            const CompAdicional = await composicaoAdicionalService.execute({produto_adicional, quantidade_liquida, und, custo_adicional, seu_preco, imposto_sob_venda, margem_contribuicao, margem_liquida})
            listaCompAdicional.push(CompAdicional);
        }

        return response.json(listaCompAdicional);
    }
}

export { CreateComposicaoAdicionalController };