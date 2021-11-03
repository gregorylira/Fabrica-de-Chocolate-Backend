import { NextFunction, Request, Response } from "express";
import { ListComposicaoAdicionalService } from "../service/ListComposicaoAdicionalService";



class ListComposicaoAdicionalController {

    async handle(request: Request, response: Response, next: NextFunction){
        const listComposicaoAdicionalService = new ListComposicaoAdicionalService()
        const listaCompAdicional = await listComposicaoAdicionalService.execute()
        
        return response.json(listaCompAdicional)
    }
}

export {ListComposicaoAdicionalController}