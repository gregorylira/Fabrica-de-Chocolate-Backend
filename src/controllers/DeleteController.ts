import { Request, Response } from "express";
import { DeleteComposicaoAdicionalService, DeleteComposicaoService, DeleteInsumoService, DeletePrecoSugeridoService } from "../service/DeleteService";


class DeleteInsumoController{
    async handle(request:Request, response:Response){
        const { produto } = request.body;
        const deleteInsumoService = new DeleteInsumoService();
        const result = await deleteInsumoService.execute(produto);
        return response.status(200).json(result);
    }
}

class DeletePrecoSugeridoController{
    async handle(request:Request, response:Response){
        const { produto } = request.body;
        const deletePrecoSugerido = new DeletePrecoSugeridoService();
        const result = await deletePrecoSugerido.execute(produto);
        return response.status(200).json(result);
    }
}

class DeleteComposicaoController{
    async handle(request:Request, response:Response){
        const {ingredienteFK} = request.body;
        const deleteComposicao = new DeleteComposicaoService();
        const result = await deleteComposicao.execute(ingredienteFK);

        return response.status(200).json(result);
    }
}
class DeleteComposicaoAdicionalController{
    async handle(request:Request, response:Response){
        const {produto_adicional} = request.body;
        const deleteComposicao = new DeleteComposicaoAdicionalService();
        const result = await deleteComposicao.execute(produto_adicional);

        return response.status(200).json(result);
    }
}

export {DeleteInsumoController, DeletePrecoSugeridoController, DeleteComposicaoController, DeleteComposicaoAdicionalController};