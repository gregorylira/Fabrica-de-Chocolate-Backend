import { getCustomRepository } from "typeorm"
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories"



class ListPrecoSugeridoService{

   async execute(){
    
    const precoSugeridoRepositorie = getCustomRepository(PrecoSugeridoRepositories)
    const listaPrecosSugeridos = precoSugeridoRepositorie.find()

    return listaPrecosSugeridos

   }


}


export { ListPrecoSugeridoService }