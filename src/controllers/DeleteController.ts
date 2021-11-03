import { Request, Response } from "express";
import { DeleteComposicaoAdicionalService, DeleteComposicaoService, DeleteInsumoService, DeletePrecoSugeridoService } from "../service/DeleteService";


class DeleteInsumoController{
    async handle(request:Request, response:Response){
        var { produto } = request.query;
        produto = produto.toString();
        produto = produto.replace(/\+/g, " ");
        const deleteInsumoService = new DeleteInsumoService();
        const result = await deleteInsumoService.execute(produto);
        return response.status(200).json(result);
    }
}

class DeletePrecoSugeridoController{
    async handle(request:Request, response:Response){
        var { produto } = request.query;
        produto = produto.toString();
        produto = produto.replace(/\+/g, " ");
        const deletePrecoSugerido = new DeletePrecoSugeridoService();
        const result = await deletePrecoSugerido.execute(produto);
        return response.status(200).json(result);
    }
}

class DeleteComposicaoController{
    async handle(request:Request, response:Response){
        var {ingredienteFK} = request.query;
        ingredienteFK = ingredienteFK.toString();
        ingredienteFK = ingredienteFK.replace(/\+/g, " ");
        const deleteComposicao = new DeleteComposicaoService();
        const result = await deleteComposicao.execute(ingredienteFK);

        return response.status(200).json(result);
    }
}
class DeleteComposicaoAdicionalController{
    async handle(request:Request, response:Response){
        var {produto_adicional} = request.query;
        produto_adicional = produto_adicional.toString();
        produto_adicional = produto_adicional.replace(/\+/g, " ");
        const deleteComposicao = new DeleteComposicaoAdicionalService();
        const result = await deleteComposicao.execute(produto_adicional);

        return response.status(200).json(result);
    }
}

export {DeleteInsumoController, DeletePrecoSugeridoController, DeleteComposicaoController, DeleteComposicaoAdicionalController};