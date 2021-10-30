import { getCustomRepository } from "typeorm";
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories";

interface IPrecoSugerido {
    produto: string,
    custo_MP: number,
    custo_total: number,
    preco_min: number,
    preco_max: number,
    preco_medio: number,
    seu_preco_venda: number,
    imposto_sob_venda: number,
    margem_contribuicao: number,
    margem_liquida: number,
}

class ModifyPrecoSugeridoService {
    async execute({produto, custo_MP, custo_total, preco_min, preco_max, preco_medio, seu_preco_venda, imposto_sob_venda, margem_contribuicao, margem_liquida }: IPrecoSugerido) {
       const precoSugeridoRepositories = getCustomRepository(PrecoSugeridoRepositories);
       if (!produto || !custo_MP || !custo_total || !preco_min || !preco_max || !preco_medio || !seu_preco_venda || !imposto_sob_venda || !margem_contribuicao || !margem_liquida) {
            throw new Error('Falta de informação');
       }
       const precoSugerido = await precoSugeridoRepositories.findOne({where: {produto}});

       if(!precoSugerido){
            throw new Error('Insumo não encontrado');
       }

       await precoSugeridoRepositories.update(precoSugerido.id,{produto, custo_MP, custo_total, preco_min, preco_max, preco_medio, seu_preco_venda, imposto_sob_venda, margem_contribuicao, margem_liquida});
       const novoPrecoSugerido = await precoSugeridoRepositories.findOne({where: {produto}});

       return novoPrecoSugerido;
    }
}

export { ModifyPrecoSugeridoService };