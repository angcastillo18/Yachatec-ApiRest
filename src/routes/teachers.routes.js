import { Router } from "express"
import { getTeachers, getTeacher, createTeacher } from "../controllers/teachers.controllers.js"

const router = Router();

router.get('/teachers', getTeachers)
router.get('/teachers/:id', getTeacher)

router.post('/teachers', createTeacher)

export default router;