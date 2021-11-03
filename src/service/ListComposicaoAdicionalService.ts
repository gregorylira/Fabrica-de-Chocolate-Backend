import { getCustomRepository } from "typeorm"
import { ComposicaoAdicionalRepositories} from "../repositories/ComposicaoAdicionalRepositories"



class ListComposicaoAdicionalService{


    async execute(){
        const composicaoAdicionalRepositories = getCustomRepository(ComposicaoAdicionalRepositories)

        const lista = composicaoAdicionalRepositories.find()

        return lista
    }

}

export { ListComposicaoAdicionalService }