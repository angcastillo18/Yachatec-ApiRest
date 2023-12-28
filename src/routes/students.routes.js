import { Router } from "express"
import { getStudents, getStudent, updateStudent, deleteStudent } from "../controllers/students.controllers.js"

const router = Router();

router.get('/students', getStudents)
router.get('/students/:id', getStudent)

router.put('/students/:id', updateStudent)

router.delete('/students/:id', deleteStudent)

export default router;