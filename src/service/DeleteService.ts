import { getCustomRepository } from "typeorm";
import { ComposicaoAdicionalRepositories } from "../repositories/ComposicaoAdicionalRepositories";
import { ComposicaoRepository } from "../repositories/ComposicaoRepositories";
import { InsumoRepositories } from "../repositories/InsumosRepositories";
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories";



class DeleteInsumoService{

    async execute(produto:string){
        const insumoRepositories = getCustomRepository(InsumoRepositories)
        const insumoExists = await insumoRepositories.findOne({where:{produto:produto}})
        if(!insumoExists){
            throw new Error('Insumo não encontrado')
        }
        await insumoRepositories.delete(insumoExists.id)
        const produtoDeletado = {
            message: 'Insumo deletado com sucesso'
        }
        return produtoDeletado
    }
}

class DeletePrecoSugeridoService{
    async execute(produto:string){
        const precoSugeridoRepositories = getCustomRepository(PrecoSugeridoRepositories)
        const precoSugeridoExists = await precoSugeridoRepositories.findOne({where:{produto:produto}})
        if(!precoSugeridoExists){
            throw new Error('Preço não encontrado')
        }

        await precoSugeridoRepositories.delete(precoSugeridoExists.id)
        const precoDeletado = {
            message: 'Produto deletado com sucesso'
        }

        return precoDeletado
    }
}

class DeleteComposicaoService{
    async execute(ingredienteFK:string){

        const composicaoProdutoRepository = getCustomRepository(ComposicaoRepository)
        const insumoRepositories = getCustomRepository(InsumoRepositories)
        const insumoExists = await insumoRepositories.findOne({where:{produto:ingredienteFK}})

        if (!insumoExists){
            throw new Error('Composição não encontrada')
        }

        const composicaoExists = await composicaoProdutoRepository.findOne({where:{ingredienteFK:insumoExists.id}})
        if(!composicaoExists){
            throw new Error('Composicao não encontrada')
        }

        await composicaoProdutoRepository.delete(composicaoExists.id)
        const composicaoDeletada = {
            message: 'Composicao deletada com sucesso'
        }

        return composicaoDeletada
    }
}

class DeleteComposicaoAdicionalService{
    async execute(produto_adicional:string){
        const composicaoAdicionalRepositories = getCustomRepository(ComposicaoAdicionalRepositories)
        const composicaoAdicionalExists = await composicaoAdicionalRepositories.findOne({where:{produto_adicional:produto_adicional}})
        if(!composicaoAdicionalExists){
            throw new Error('Composicao não encontrada')
        }

        await composicaoAdicionalRepositories.delete(composicaoAdicionalExists.id)
        const composicaoAdicionalDeletada = {
            message: 'Composicao adicional deletada com sucesso'
        }

        return composicaoAdicionalDeletada
    }
}


export { DeleteInsumoService, DeletePrecoSugeridoService, DeleteComposicaoService, DeleteComposicaoAdicionalService };