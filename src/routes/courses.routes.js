import { Router } from "express"
import { getCourses, getCourse, createCourse, updateCourse, getCourseChapters } from "../controllers/courses.controllers.js"
import { requireToken } from "../middlewares/requireToken.js"

const router = Router();

router.get('/courses', getCourses)
router.get('/courses/:id', getCourse)
router.put('/courses/:id/', updateCourse)

router.post('/courses', createCourse)

router.get('/courses/:id/chapters', requireToken, getCourseChapters)//?frontend route

export default router;