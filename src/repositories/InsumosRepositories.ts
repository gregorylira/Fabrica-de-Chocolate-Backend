import { EntityRepository, Repository } from "typeorm";
import {Insumo} from "../entity/Insumo"
@EntityRepository(Insumo)
class InsumoRepositories extends Repository < Insumo > {

}

export { InsumoRepositories }