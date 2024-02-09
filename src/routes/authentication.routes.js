import { Router } from "express"
import { register, login, refreshToken, logout } from "../controllers/authentication.controllers.js"
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js"
const router = Router();

// router.get('/students', getStudents)
// router.get('/students/:id', getStudent)

router.post('/auth/register', register)

router.post('/auth/login', login) //?frontend route
router.get('/auth/refresh', requireRefreshToken, refreshToken) //?frontend route
router.get('/auth/logout', logout) //?frontend route


// router.put('/students/:id', updateStudent)

// router.delete('/students/:id', deleteStudent)

export default router;