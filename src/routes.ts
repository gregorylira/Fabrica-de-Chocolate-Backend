import { Router } from "express"
import { CreateInsumoController } from "./controllers/CreateInsumoController"

const router = Router()

const createInsumoController = new CreateInsumoController


router.post("/insumo",createInsumoController.handle)

export { router }