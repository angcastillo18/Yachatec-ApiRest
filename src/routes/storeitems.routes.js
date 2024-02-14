import { Router } from "express"
import { getStoreItems, getStoreItem, createStoreItem, swapStoreItem } from "../controllers/storeitems.controllers.js"
import { requireToken } from "../middlewares/requireToken.js"

const router = Router();

router.get('/storeItems', getStoreItems)
router.get('/storeItems/:id', getStoreItem)

router.post('/storeItems', createStoreItem)
router.post('/storeItems/:id/swap', requireToken, swapStoreItem) //?frontend route

export default router;