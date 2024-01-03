import { Student } from "../models/Student.js";
import { hashPassword, isMatch, generateToken, generateRefreshToken } from "../helpers/index.js";

export const register = async (req, res) => {
    try {
        const { scholarLevelId, name, email, password, parentEmail } = req.body

        if (!scholarLevelId || !name || !email || !password || !parentEmail) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const existingStudent = await Student.findOne({ where: { email } })

        if (existingStudent) {
            return res.status(400).json({ message: 'Student already exists' })
        }

        const newStudent = await Student.create({
            scholarLevelId,
            name,
            email,
            password: hashPassword(password),
            parentEmail,
        })

        //*generate JWT
        const { token, expiresIn } = generateToken({ uid: newStudent.id })
        generateRefreshToken({ uid: newStudent.id }, res)

        return res.status(200).json({ token, expiresIn })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const student = await Student.findOne({ where: { email } })

        if (!student) {
            return res.status(400).json({ message: 'Credentials incorrect' })
        }

        if (!isMatch(password, student.password)) {
            return res.status(400).json({ message: 'Credentials incorrect' })
        }

        //*generate JWT
        const { token, expiresIn } = generateToken({ uid: student.id })
        generateRefreshToken({ uid: student.id }, res) //* essential to refresh the principal token

        return res.json({ token, expiresIn })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const logout = async (req, res) => {
    res.clearCookie('refreshToken');

    return res.sendStatus(204);
}

export const refreshToken = async (req, res) => {

    try {
        const { uid } = req //* uid from requireRefreshToken

        const { token, expiresIn } = generateToken({ uid }) //generate new token

        return res.json({ token, expiresIn })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}