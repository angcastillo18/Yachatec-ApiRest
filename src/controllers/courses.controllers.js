import { Course } from "../models/Course.js";
import { Student } from "../models/Student.js";
import { StudentCourse } from "../models/StudentCourse.js";
import {Chapter} from "../models/Chapter.js";

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

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params
        const bodyData = req.body
        //* update keys dynamically
        const fieldsAvailable = ['title', 'totalChapters'] // keys available to update 
        //* filter body data, to update only available keys
        let dataSended = Object.entries(bodyData);
        let keysFiltered = dataSended.filter(([key, value]) => fieldsAvailable.includes(key));
        let objToUpdate = Object.fromEntries(keysFiltered);

        //check fields available
        if (Object.keys(objToUpdate).length !== 0) {
            const course = await Course.findByPk(id)
            if (!course) return res.status(404).json({ message: 'Course to update not found' })
            //*method to update some keys of object.
            await course.update(objToUpdate);
            res.json(course)
        } else {
            throw new Error('No existen campos válidos para actualizar')
        }

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
            totalChapters: 30
        })

        const studentsIdsQueryset = await Student.findAll({ where: { scholarLevelId: scholarLevelId }, attributes: ['id'], raw: true })
        const studentIds = studentsIdsQueryset.map(student => student.id);
        // console.log(students_ids);
        const studentCourseData = studentIds.map(studentId => {
            return {
                studentId,
                courseId: newCourse.id,
                currentChapterOrder: 1,
            }
        })

        const studentCourses = await StudentCourse.bulkCreate(studentCourseData);

        res.json(studentCourses)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}


export const getCourseChapters = async (req, res) => {

    try {
        const { uid } = req //* uid from requireToken
        if (!uid) return res.status(401).json({ message: 'Unauthorized' })

        const { id } = req.params
        const course = await Course.findByPk(id)
        if (!course) return res.status(404).json({ message: 'Course not found' })

        const chapters = await Chapter.findAll({
            where: {
                courseId: id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt','courseId']
            },
        })

        if (!chapters) return res.status(404).json({ message: 'Chapters not found' })

        return res.json(chapters)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}