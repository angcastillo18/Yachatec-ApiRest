import { Teacher } from "../models/Teacher.js";


export const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        res.json(teachers)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTeacher = async (req, res) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findByPk(id)

        if (!teacher) return res.status(404).json({ message: 'Teacher not found' })

        res.json(teacher)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createTeacher = async (req, res) => {

    try {
        const { schoolId, name, email } = req.body
        const newTeacher = await Teacher.create({
            schoolId,
            name,
            email
        })
        res.json(newTeacher)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
