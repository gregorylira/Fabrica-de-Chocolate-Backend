import { Router } from "express"
import { CreateComposicaoAdicionalController } from "./controllers/CreateComposicaoAdicionalController"
import { CreateComposicaoController } from "./controllers/CreateComposicaoController"
import { CreateInsumoController } from "./controllers/CreateInsumoController"
import { CreatePrecoSugeridoController } from "./controllers/CreatePrecoSugeridoController"
import { ListaComposicaoProdutoController } from "./controllers/ListComposicaoProdutoController"
import { ListInsumoController } from "./controllers/ListInsumoController"
import { ListPrecoSugeridoController } from "./controllers/ListPrecoSugeridoController"
import { ModifyComposicaoProdutoController, ModifyComposicaoAdicionalProdutoController } from "./controllers/ModifyComposicaoProdutoController"
import { modifyInsumoController } from "./controllers/ModifyInsumoController"
import { ModifyPrecoSugeridoController } from "./controllers/ModifyPrecoSugeridoController"
import {DeleteInsumoController, DeletePrecoSugeridoController, DeleteComposicaoController, DeleteComposicaoAdicionalController} from "./controllers/DeleteController"
const router = Router()

const createInsumoController = new CreateInsumoController
const createPrecoSugeridoController = new CreatePrecoSugeridoController
const createComposicaoController = new CreateComposicaoController
const createComposicaoAdicionalController = new CreateComposicaoAdicionalController()
const modifyInsumoService = new modifyInsumoController()
const modifyPrecoSugeridoController = new ModifyPrecoSugeridoController()
const modifyComposicaoProdutoController = new ModifyComposicaoProdutoController()
const modifyComposicaoAdicionalProdutoController = new ModifyComposicaoAdicionalProdutoController()
const deleteInsumoController = new DeleteInsumoController()
const deletePrecoSugeridoController = new DeletePrecoSugeridoController()
const deleteComposicaoController = new DeleteComposicaoController()
const deleteComposicaoAdicionalController = new DeleteComposicaoAdicionalController()




const ListInsumo = new ListInsumoController
const listPrecoSugeridoController = new ListPrecoSugeridoController
const listComposicaoProdutoController = new ListaComposicaoProdutoController


router.post("/insumo",createInsumoController.handle)
router.post("/preco-sugerido",createPrecoSugeridoController.handle)
router.post("/composicao", createComposicaoController.handle)
router.post("/composicao-adicional", createComposicaoAdicionalController.handle)
router.post("/modify-insumo", modifyInsumoService.handle)
router.post("/modify-preco-sugerido", modifyPrecoSugeridoController.handle)
router.post("/modify-composicao-produto", modifyComposicaoProdutoController.handle)
router.post("/modify-composicao-adicional-produto", modifyComposicaoAdicionalProdutoController.handle)
router.post("/delete-insumo", deleteInsumoController.handle)
router.post("/delete-preco-sugerido", deletePrecoSugeridoController.handle)
router.post("/delete-composicao", deleteComposicaoController.handle)
router.post("/delete-composicao-adicional", deleteComposicaoAdicionalController.handle)




router.get("/insumo", ListInsumo.handle )
router.get("/preco-sugerido",listPrecoSugeridoController.handle)
router.get("/composicao", listComposicaoProdutoController.handle)

export { router }