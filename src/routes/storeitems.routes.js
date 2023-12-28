import { Router } from "express"
import { getStoreItems, getStoreItem, createStoreItem } from "../controllers/storeitems.controllers.js"

const router = Router();

router.get('/storeItems', getStoreItems)
router.get('/storeItems/:id', getStoreItem)

router.post('/storeItems', createStoreItem)

export default router;