import { getCustomRepository, getRepository } from "typeorm";
import { ComposicaoAdicionalRepositories } from "../repositories/ComposicaoAdicionalRepositories";



interface IComposicaoAdicional{
    produto_adicional: string,
    quantidade_liquida: number,
    und: string,
    custo_adicional: number,
    seu_preco: number,
    imposto_sob_venda: number,
    margem_contribuicao: number,
    margem_liquida: number,
}

class CreateComposicaoAdicionalService{
    async execute({produto_adicional,quantidade_liquida,und,custo_adicional,seu_preco=0,imposto_sob_venda,margem_contribuicao,margem_liquida}: IComposicaoAdicional){
        const composicaoAdicionalRepository = getCustomRepository(ComposicaoAdicionalRepositories);
        if(!produto_adicional){
            throw new Error('O produto adicional não pode ser vazio')
        }
        const composicaoAlreadyExists = await composicaoAdicionalRepository.findOne({
            produto_adicional
        });

        if(composicaoAlreadyExists){
            throw new Error('O produto adicional já existe')
        }

        const composicaoAdicional = composicaoAdicionalRepository.create({
            produto_adicional,
            quantidade_liquida,
            und,
            custo_adicional,
            seu_preco,
            imposto_sob_venda,
            margem_contribuicao,
            margem_liquida,
        })

        await composicaoAdicionalRepository.save(composicaoAdicional);

        return composicaoAdicional;
    }
    
}

export { CreateComposicaoAdicionalService }