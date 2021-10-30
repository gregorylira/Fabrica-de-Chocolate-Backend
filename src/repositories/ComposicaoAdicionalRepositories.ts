import { EntityRepository, Repository } from "typeorm";
import { comp_adicional } from "../entity/Composicao_Adicional";

@EntityRepository(comp_adicional)
export class ComposicaoAdicionalRepositories extends Repository<comp_adicional> {}