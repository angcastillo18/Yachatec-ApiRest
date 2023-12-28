import { Course } from "../models/Course.js";


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

    try {
        const { teacherId, scholarLevelId, title } = req.body
        const newCourse = await Course.create({
            teacherId,
            scholarLevelId,
            title
        })
        res.json(newCourse)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
