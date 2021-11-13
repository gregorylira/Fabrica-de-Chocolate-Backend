import { getCustomRepository } from "typeorm";
import { ComposicaoAdicionalRepositories } from "../repositories/ComposicaoAdicionalRepositories";
import { ComposicaoRepository } from "../repositories/ComposicaoRepositories";
import { InsumoRepositories } from "../repositories/InsumosRepositories";
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories";


interface IModifyComposicaoProdutoService {
    produtoFK: string;
    ingredienteFK: string;
    quant_liqu: number;
}

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

class ModifyComposicaoProdutoService {
    async execute({produtoFK, ingredienteFK, quant_liqu}: IModifyComposicaoProdutoService) {
        const composicaoProdutoRepository = getCustomRepository(ComposicaoRepository);
        if (!produtoFK || !ingredienteFK || !quant_liqu) {
            throw new Error("Preencha todos os campos");
        }

        const precoSugeridoRepositories = getCustomRepository(PrecoSugeridoRepositories)
        const insumoRepositories = getCustomRepository(InsumoRepositories)

        const produto = await precoSugeridoRepositories.findOne({where: {produto: produtoFK}})
        const insumo = await insumoRepositories.findOne({where: {produto: ingredienteFK}})

        const composicaoProduto = await composicaoProdutoRepository.findOne({
            where: { produtoFK:produto.id, ingredienteFK: insumo.id }
        })

        if(!composicaoProduto) {
            throw new Error("Composição não encontrada")
        }

        await composicaoProdutoRepository.update(composicaoProduto.id, {produtoFK: produto.id, ingredienteFK: insumo.id, quant_liqu: quant_liqu})
        const novaComposicao = await composicaoProdutoRepository.findOne({where: {id: composicaoProduto.id}})
        const novaComp = {
            produtoFK,
            ingredienteFK,
            quant_liqu: novaComposicao.quant_liqu,
            unid_medidaFK: novaComposicao.unid_medidaFK,
            custo_InsumoFK: novaComposicao.custo_InsumoFK
        }
        return novaComp
    }
}

class ModifyComposicaoAdicionalService {
    async execute( {produto_adicional, quantidade_liquida, und, custo_adicional, seu_preco = 0, imposto_sob_venda, margem_contribuicao, margem_liquida }: IComposicaoAdicional ) {
        const composicaoAdicionalRepository = getCustomRepository(ComposicaoAdicionalRepositories)
        if (!produto_adicional || !quantidade_liquida || !und || !custo_adicional || !seu_preco || !imposto_sob_venda || !margem_contribuicao || !margem_liquida) {
            throw new Error("Preencha todos os campos");
        };

        const composicaoAdicional = await composicaoAdicionalRepository.findOne({
            where: { produto_adicional: produto_adicional }
        });

        if(!composicaoAdicional) {
            throw new Error("Composição adicional não encontrada")
        }

        await composicaoAdicionalRepository.update(composicaoAdicional.id, {produto_adicional: produto_adicional, quantidade_liquida: quantidade_liquida, und: und, custo_adicional: custo_adicional, seu_preco: seu_preco, imposto_sob_venda: imposto_sob_venda, margem_contribuicao: margem_contribuicao, margem_liquida: margem_liquida})
        const novaComposicaoAdicional = await composicaoAdicionalRepository.findOne({where: {id: composicaoAdicional.id}})

        return novaComposicaoAdicional
    }
}

export { ModifyComposicaoProdutoService, ModifyComposicaoAdicionalService };