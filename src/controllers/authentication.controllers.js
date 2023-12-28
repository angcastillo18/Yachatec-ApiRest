import { Student } from "../models/Student.js";
import { hashPassword } from "../helpers/index.js";

export const register = async (req, res) => {
    try {
        const {scholarLevelId, name, email, password, parentEmail } = req.body

        if(!scholarLevelId || !name || !email || !password || !parentEmail) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const existingStudent = await Student.findOne({ where: { email } })

        if(existingStudent) {
            return res.status(400).json({ message: 'Student already exists' })
        }
        
        const newStudent = await Student.create({
            scholarLevelId,
            name,
            email,
            password:hashPassword(password),
            parentEmail,
        })
        
        return res.status(200).json(newStudent)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    
}