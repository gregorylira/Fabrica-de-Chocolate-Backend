import { NextFunction, Request, Response } from "express";
import { ListInsumoService } from "../service/ListInsumoService";



class ListInsumoController {

    async handle(request: Request, response: Response, next: NextFunction){
        const insumoService = new ListInsumoService()
        const insumo = await insumoService.execute()
        
        return response.json(insumo)
    }
}

export {ListInsumoController}