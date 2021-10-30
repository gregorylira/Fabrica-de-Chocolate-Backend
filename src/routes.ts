import { Router } from "express"
import { CreateComposicaoController } from "./controllers/CreateComposicaoController"
import { CreateInsumoController } from "./controllers/CreateInsumoController"
import { CreatePrecoSugeridoController } from "./controllers/CreatePrecoSugeridoController"
import { ListInsumoController } from "./controllers/ListInsumoController"
import { ListPrecoSugeridoController } from "./controllers/ListPrecoSugeridoController"
const router = Router()

const createInsumoController = new CreateInsumoController
const createPrecoSugeridoController = new CreatePrecoSugeridoController
const createComposicaoController = new CreateComposicaoController

const ListInsumo = new ListInsumoController
const listPrecoSugeridoController = new ListPrecoSugeridoController


router.post("/insumo",createInsumoController.handle)
router.post("/preco-sugerido",createPrecoSugeridoController.handle)
router.post("/composicao", createComposicaoController.handle)

router.get("/insumo", ListInsumo.handle )
router.get("/preco-sugerido",listPrecoSugeridoController.handle)

export { router }