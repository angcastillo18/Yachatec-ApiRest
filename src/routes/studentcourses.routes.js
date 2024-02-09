import { Router } from "express"
import { getStudentCourses, updateStudentCourse } from "../controllers/studentcourse.controllers.js"

const router = Router();

router.get('/studentCourses', getStudentCourses)
router.put('/studentCourses/:id/', updateStudentCourse)


export default router;