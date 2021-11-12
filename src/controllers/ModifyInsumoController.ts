import { Request, Response } from "express";
import { ModifyInsumoService } from "../service/ModifyInsumoService";


class modifyInsumoController{

    async handle(request: Request, response: Response){
        const {produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final } = request.body;
        const id = request.params.id;
        console.log(id);
        const insumoModificado = new ModifyInsumoService();
        const insumo = await insumoModificado.execute({produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final });


        return response.status(200).json(insumo);
    }
}

export {modifyInsumoController};