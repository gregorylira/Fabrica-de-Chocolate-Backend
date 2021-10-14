import { getCustomRepository, useContainer } from "typeorm"
import { InsumoRepositories } from "../repositories/InsumosRepositories"

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

class CreateInsumoService {

    async execute({produto, medida, und, custo_rede, custo = null, custo_atual, aproveitamento, custo_real, custo_final }: IInsumoRequest){
        const insumoRepository = getCustomRepository(InsumoRepositories)

        if(!produto){
            throw new Error ("Product is not avaible")
        }

        const insumoAlreadyExists = await insumoRepository.findOne({
            produto,
        });

        if(insumoAlreadyExists){
            //throw new Error ("Product already exists");
            const mensagem = {
                mensage: "This Product already exists",
                product: produto
            }
            return mensagem
        }

        const insumo = insumoRepository.create({
            produto,
            medida,
            und,
            custo_rede,
            custo,
            custo_atual,
            aproveitamento,
            custo_real,
            custo_final
        })

        await insumoRepository.save(insumo)

        return insumo;

    }
}

export { CreateInsumoService }