import { EntityRepository, Repository } from "typeorm";
import { Preco_Sugerido } from "../entity/Preco_Sugerido";


@EntityRepository(Preco_Sugerido)
class PrecoSugeridoRepositories extends Repository < Preco_Sugerido >{
    
}

export { PrecoSugeridoRepositories }