import { EntityRepository,Repository } from "typeorm";
import { Composicao } from "../entity/Composicao";


@EntityRepository(Composicao)
export class ComposicaoRepository extends Repository<Composicao> {}
