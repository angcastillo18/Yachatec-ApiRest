import { Router } from "express"
import { getSchools, getSchool, createSchool, updateSchool, deleteSchool } from "../controllers/schools.controllers.js"

const router = Router();

router.get('/schools', getSchools)
router.get('/schools/:id', getSchool)

router.post('/schools', createSchool)

router.put('/schools/:id', updateSchool)

router.delete('/schools/:id', deleteSchool)

export default router;