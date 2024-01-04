import { Course } from "../models/Course.js";
import { Student } from "../models/Student.js";
import {StudentCourse} from "../models/StudentCourse.js";

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        
        res.json(courses)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getCourse = async (req, res) => {
    try {
        const { id } = req.params
        const course = await Course.findByPk(id)

        if (!course) return res.status(404).json({ message: 'Course not found' })

        res.json(course)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createCourse = async (req, res) => {
    //* this method create course, and relation with the model StudentCourse. relation M - M 
    try {
        const { teacherId, scholarLevelId, title } = req.body
        const newCourse = await Course.create({
            teacherId,
            scholarLevelId,
            title,
            progressMax: 30
        })

        const studentsIdsQueryset = await Student.findAll({ where: { scholarLevelId: scholarLevelId }, attributes: ['id'] ,raw: true})
        const studentIds = studentsIdsQueryset.map(student => student.id);
        // console.log(students_ids);
        const studentCourseData= studentIds.map(studentId => {
            return {
                studentId,
                courseId:newCourse.id,
                progress:0.0,
                currentChapterLesson: {chapter: 0, lesson: 0}
            }
        })

        const studentCourses=await StudentCourse.bulkCreate(studentCourseData);

        res.json(studentCourses)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
