import { Router } from "express"
import { getCourses, getCourse, createCourse } from "../controllers/courses.controllers.js"

const router = Router();

router.get('/courses', getCourses)
router.get('/courses/:id', getCourse)

router.post('/courses', createCourse)

export default router;