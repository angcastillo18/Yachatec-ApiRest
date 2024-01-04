import { Student } from "../models/Student.js";
import { ScholarLevel } from "../models/ScholarLevel.js";
import { School } from "../models/School.js";
import { Teacher } from "../models/Teacher.js";
import { StudentCourse } from "../models/StudentCourse.js";
import { Course } from "../models/Course.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getStudent = async (req, res) => {
    try {
        const { uid } = req //* uid from requireToken
        const student = await Student.findByPk(uid, {
            attributes: {
                exclude: ['password']
            }
        })

        if (!student) return res.status(404).json({ message: 'Student not found' })

        res.json(student)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const bodyData = req.body
        //* update keys dynamically
        const fieldsAvailable = ['name', 'email', 'password', 'profilePicture', 'experience', 'coins', 'parentEmail', 'level'] // keys available to update 
        //* filter body data, to update only available keys
        let dataSended = Object.entries(bodyData);
        let keysFiltered = dataSended.filter(([key, value]) => fieldsAvailable.includes(key));
        let objToUpdate = Object.fromEntries(keysFiltered);

        //check fields available
        if (Object.keys(objToUpdate).length !== 0) {
            const student = await Student.findByPk(id)
            if (!student) return res.status(404).json({ message: 'Student to update not found' })
            //*method to update some keys of object.
            await student.update(objToUpdate);
            res.json(student)
        } else {
            throw new Error('No existen campos válidos para actualizar')
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params
        const studentDeleted = await Student.destroy({ where: { id } })
        if (!studentDeleted) return res.status(404).json({ message: 'Student to delete not found' })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getStudentMainData = async (req, res) => {
    try {
        const { uid } = req //* uid from requireToken
        const student = await Student.findByPk(uid, {
            attributes: {
                exclude: ['password','createdAt','updatedAt','scholarLevelId']
            },
            include: [
                {
                    model: ScholarLevel,
                    include: [
                        {
                            model: School,
                            attributes: {
                                exclude: ['createdAt','updatedAt']
                            },
                        }
                    ],
                    attributes: {
                        exclude: ['createdAt','updatedAt','schoolId']
                    },
                },
                {
                    model: StudentCourse,
                    include: [
                        {
                            model: Course,
                            include: [
                                {
                                    model: Teacher,
                                    attributes: {
                                        exclude: ['createdAt','updatedAt','schoolId']
                                    },
                                }
                            ],
                            attributes: {
                                exclude: ['createdAt','updatedAt','scholarLevelId','teacherId']
                            },
                        }
                    ],
                    attributes: {
                        exclude: ['createdAt','updatedAt','courseId']
                    },
                    
                }
            ]
        })

        if (!student) return res.status(404).json({ message: 'Student not found' })

        res.json(student)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

