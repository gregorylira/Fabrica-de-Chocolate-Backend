import { json } from "express";
import { getCustomRepository } from "typeorm";
import { InsumoRepositories } from "../repositories/InsumosRepositories";

interface IInsumoRequest {
    produto: string,
    medida: number,
    und: string,
    custo_rede: number,
    custo?: number,
    custo_atual: number,
    aproveitamento: number,
    custo_real: number,
    custo_final: number,
}

class ModifyInsumoService {
    async execute({produto, medida, und, custo_rede, custo = null, custo_atual, aproveitamento, custo_real, custo_final }: IInsumoRequest){
       const insumoRepository = getCustomRepository(InsumoRepositories);
       if (!produto || !medida || !und ||!custo || !custo_rede || !custo_atual || !aproveitamento || !custo_real || !custo_final) {
            throw new Error('Preencha todos os campos');
       }
       const insumo = await insumoRepository.findOne({where: {produto}});

       if(!insumo){
            throw new Error('Insumo não encontrado');
       }

       await insumoRepository.update(insumo.id,{produto, medida, und, custo_rede, custo, custo_atual, aproveitamento, custo_real, custo_final});
       const novoInsumo = await insumoRepository.findOne({where: {produto}});

       return novoInsumo;
    }
}

export { ModifyInsumoService };