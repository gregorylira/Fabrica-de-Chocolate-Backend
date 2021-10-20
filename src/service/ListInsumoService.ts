import { getCustomRepository } from "typeorm"
import { InsumoRepositories } from "../repositories/InsumosRepositories"



class ListInsumoService{


    async execute(){
        const insumoRepositories = getCustomRepository(InsumoRepositories)

        const lista = insumoRepositories.find()

        return lista
    }

}

export { ListInsumoService }