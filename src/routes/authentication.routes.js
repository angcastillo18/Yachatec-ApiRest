import { Router } from "express"
import { register, login, refreshToken, logout } from "../controllers/authentication.controllers.js"
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js"
const router = Router();

// router.get('/students', getStudents)
// router.get('/students/:id', getStudent)

router.post('/auth/register', register)
router.post('/auth/login', login)
router.get('/auth/refresh', requireRefreshToken, refreshToken)
router.get('/auth/logout', logout)


// router.put('/students/:id', updateStudent)

// router.delete('/students/:id', deleteStudent)

export default router;