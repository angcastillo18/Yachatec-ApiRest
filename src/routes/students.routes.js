import { Router } from "express"
import { getStudents, getStudent, updateStudent, deleteStudent, getStudentMainData } from "../controllers/students.controllers.js"
import { requireToken } from "../middlewares/requireToken.js"

const router = Router();

router.get('/students', getStudents)
router.get('/student/', requireToken, getStudent)

//* principal route
router.get('/student/main_data', requireToken, getStudentMainData) //?frontend route

router.put('/students/:id', updateStudent)

router.delete('/students/:id', deleteStudent)

export default router;