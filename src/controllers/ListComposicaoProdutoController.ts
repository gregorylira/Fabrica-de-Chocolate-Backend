import { NextFunction, Request, Response } from "express";
import { ListaComposicaoProdutoService } from "../service/ListComposicaoProdutoService";
import { TratamentoListaComposicao } from "../service/TratamentoListaComposicao";



class ListaComposicaoProdutoController{

    async handle(request: Request, response: Response, next: NextFunction){
        var {produto} = request.query;
        produto = produto.toString();
        produto = produto.replace(/\+/g, " ");
        
        const listaComposicaoProdutoService = new ListaComposicaoProdutoService()
        const listPrecosSugeridos = await listaComposicaoProdutoService.execute(produto)

        const tratamentoListaComposicao = new TratamentoListaComposicao()
        const listaComposicaoTratada = await tratamentoListaComposicao.execute(listPrecosSugeridos)

        return response.json(listaComposicaoTratada)
    }

}


export { ListaComposicaoProdutoController }