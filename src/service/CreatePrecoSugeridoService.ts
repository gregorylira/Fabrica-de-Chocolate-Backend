import { getCustomRepository } from "typeorm"
import { PrecoSugeridoRepositories } from "../repositories/PrecoSugeridoRepositories"


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


class CreatePrecoSugerido {
    async execute({produto,custo_MP,custo_total,preco_min,preco_max,preco_medio,seu_preco_venda,imposto_sob_venda,margem_contribuicao,margem_liquida}:IPrecoSugerido){
            const precoSugeridoRepositorie = getCustomRepository(PrecoSugeridoRepositories)
            if(!produto){
                throw new Error ("Product is not avaible")
            }

            const productAlreadyExists = await precoSugeridoRepositorie.findOne({
                produto,
            });

            if(productAlreadyExists){
                const mensagem = {
                    mensage: "This Product already exists",
                    product: produto
                }
                return mensagem
            }
            const precoSugerido = precoSugeridoRepositorie.create({
                produto,
                custo_MP,
            })
        }
}


export { CreatePrecoSugerido }