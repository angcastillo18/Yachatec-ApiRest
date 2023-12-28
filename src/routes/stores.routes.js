import { Router } from "express"
import { getStores, getStore, createStore } from "../controllers/stores.controllers.js"

const router = Router();

router.get('/stores', getStores)
router.get('/stores/:id', getStore)

router.post('/stores', createStore)

export default router;