import { Router } from "express"
import { CreateComposicaoAdicionalController } from "./controllers/CreateComposicaoAdicionalController"
import { CreateComposicaoController } from "./controllers/CreateComposicaoController"
import { CreateInsumoController } from "./controllers/CreateInsumoController"
import { CreatePrecoSugeridoController } from "./controllers/CreatePrecoSugeridoController"
import { ListaComposicaoProdutoController } from "./controllers/ListComposicaoProdutoController"
import { ListInsumoController } from "./controllers/ListInsumoController"
import { ListPrecoSugeridoController } from "./controllers/ListPrecoSugeridoController"
import { modifyInsumoController } from "./controllers/ModifyInsumoController"
const router = Router()

const createInsumoController = new CreateInsumoController
const createPrecoSugeridoController = new CreatePrecoSugeridoController
const createComposicaoController = new CreateComposicaoController
const createComposicaoAdicionalController = new CreateComposicaoAdicionalController()
const modifyInsumoService = new modifyInsumoController()


const ListInsumo = new ListInsumoController
const listPrecoSugeridoController = new ListPrecoSugeridoController
const listComposicaoProdutoController = new ListaComposicaoProdutoController


router.post("/insumo",createInsumoController.handle)
router.post("/preco-sugerido",createPrecoSugeridoController.handle)
router.post("/composicao", createComposicaoController.handle)
router.post("/composicao-adicional", createComposicaoAdicionalController.handle)
router.post("/modify-insumo", modifyInsumoService.handle)


router.get("/insumo", ListInsumo.handle )
router.get("/preco-sugerido",listPrecoSugeridoController.handle)
router.get("/composicao", listComposicaoProdutoController.handle)

export { router }