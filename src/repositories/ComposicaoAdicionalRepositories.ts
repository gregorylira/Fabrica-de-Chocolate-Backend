import { EntityRepository, Repository } from "typeorm";
import { comp_adicional } from "../entity/Composicao_Adicional";

@EntityRepository(comp_adicional)
class ComposicaoAdicionalRepositories extends Repository<comp_adicional> {}

export { ComposicaoAdicionalRepositories };