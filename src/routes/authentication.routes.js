import { Router } from "express"
import { register } from "../controllers/authentication.controllers.js"

const router = Router();

// router.get('/students', getStudents)
// router.get('/students/:id', getStudent)

router.post('/auth/register', register)

// router.put('/students/:id', updateStudent)

// router.delete('/students/:id', deleteStudent)

export default router;