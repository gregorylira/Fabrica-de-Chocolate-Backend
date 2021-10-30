import { getCustomRepository } from "typeorm";
import { ComposicaoRepository } from "../repositories/ComposicaoRepositories";
import { InsumoRepositories } from "../repositories/InsumosRepositories";
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories";


interface IModifyComposicaoProdutoService {
    produtoFK: string;
    ingredienteFK: string;
    quant_liqu: number;
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

        return novaComposicao
    }
}


export { ModifyComposicaoProdutoService };