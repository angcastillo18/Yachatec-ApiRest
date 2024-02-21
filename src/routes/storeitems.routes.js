import { Router } from "express"
import { getStoreItems, getStoreItem, createStoreItem, updateStoreItem, swapStoreItem } from "../controllers/storeitems.controllers.js"
import { requireToken } from "../middlewares/requireToken.js"

const router = Router();

router.get('/storeItems', getStoreItems)
router.get('/storeItems/:id', getStoreItem)

router.post('/storeItems', createStoreItem)
router.put('/storeItems/:id', updateStoreItem)

router.post('/storeItems/:id/swap', requireToken, swapStoreItem) //?frontend route

export default router;