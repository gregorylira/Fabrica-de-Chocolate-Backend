import { getCustomRepository } from "typeorm"
import { ComposicaoRepository } from "../repositories/ComposicaoRepositories"
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories"




class ListaComposicaoProdutoService{

   async execute(produto:string = "none"){
    const composicaoProdutoRepository = getCustomRepository(ComposicaoRepository)
    const precoSugeridoRepository = getCustomRepository(PrecoSugeridoRepositories)

    if(produto == "none"){
       const listaComposicao = composicaoProdutoRepository.find()
       return listaComposicao

    }
    const produtoSugerido = await precoSugeridoRepository.findOne({
       produto
    })

    if (!produtoSugerido){
         throw new Error("Produto não encontrado")
    }
    
    
    const listaComposicao = composicaoProdutoRepository.find({produtoFK:produtoSugerido.id})
    
    return listaComposicao


   }


}


export { ListaComposicaoProdutoService }