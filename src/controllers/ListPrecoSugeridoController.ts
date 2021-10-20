import { NextFunction, Request, Response } from "express";
import { ListPrecoSugeridoService } from "../service/ListPrecoSugeridoService";



class ListPrecoSugeridoController{

    async handle(request: Request, response: Response, next: NextFunction){

        const precoSugeridoService = new ListPrecoSugeridoService()
        const listPrecosSugeridos = await precoSugeridoService.execute()


        return response.json(listPrecosSugeridos)
    }

}


export { ListPrecoSugeridoController }