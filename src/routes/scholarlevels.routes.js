import { Router } from "express"
import { getScholarLevels, getScholarLevel, createScholarLevel } from "../controllers/scholarlevels.controllers.js"

const router = Router();

router.get('/scholarLevels', getScholarLevels)
router.get('/scholarLevels/:id', getScholarLevel)

router.post('/scholarLevels', createScholarLevel)

export default router;