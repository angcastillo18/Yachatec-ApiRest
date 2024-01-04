import { Router } from "express"
import { getScholarLevels, getScholarLevel, createScholarLevel,getScholarLevelStoreData } from "../controllers/scholarlevels.controllers.js"
import { requireToken } from "../middlewares/requireToken.js"

const router = Router();

router.get('/scholarLevels', getScholarLevels)
router.get('/scholarLevels/:id', getScholarLevel)

router.post('/scholarLevels', createScholarLevel)

//* routes to get store and store items data=>
router.get('/scholarLevels/:id/store',requireToken,getScholarLevelStoreData)

export default router;