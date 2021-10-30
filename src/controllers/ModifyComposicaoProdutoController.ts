import { Request, Response } from "express";
import { ModifyComposicaoProdutoService, ModifyComposicaoAdicionalService } from "../service/ModifyComposicaoProdutoService";



class ModifyComposicaoProdutoController {

    async handle(request: Request, response: Response){
        const {produtoFK, ingredienteFK, quant_liqu} = request.body;

        const composicaoProdutoService = new ModifyComposicaoProdutoService();
        const composicaoModificada = await composicaoProdutoService.execute({produtoFK, ingredienteFK, quant_liqu});
    
        return response.status(200).json(composicaoModificada);
    }

}

class ModifyComposicaoAdicionalProdutoController{
    async handle(request: Request, response: Response){
        const {produto_adicional, quantidade_liquida, und, custo_adicional, seu_preco, imposto_sob_venda, margem_contribuicao, margem_liquida } = request.body;

        const composicaoAdicionalProduto = new ModifyComposicaoAdicionalService();
        const composicaoAdicionalModificada = await composicaoAdicionalProduto.execute({produto_adicional, quantidade_liquida, und, custo_adicional, seu_preco, imposto_sob_venda, margem_contribuicao, margem_liquida});

        return response.status(200).json(composicaoAdicionalModificada);
    }
}

export { ModifyComposicaoProdutoController, ModifyComposicaoAdicionalProdutoController };