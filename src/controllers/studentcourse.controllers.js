import { StudentCourse } from "../models/StudentCourse.js";

export const getStudentCourses = async (req, res) => {
    try {
        const studentCourses = await StudentCourse.findAll();
        res.json(studentCourses)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateStudentCourse = async (req, res) => {
    try {
        const { id } = req.params
        const bodyData = req.body
        //* update keys dynamically
        const fieldsAvailable = ['currentChapterOrder', 'courseId', 'studentId'] // keys available to update 
        //* filter body data, to update only available keys
        let dataSended = Object.entries(bodyData);
        let keysFiltered = dataSended.filter(([key, value]) => fieldsAvailable.includes(key));
        let objToUpdate = Object.fromEntries(keysFiltered);

        //check fields available
        if (Object.keys(objToUpdate).length !== 0) {
            const studentCourse = await StudentCourse.findByPk(id)
            if (!studentCourse) return res.status(404).json({ message: 'StudentCourse to update not found' })
            //*method to update some keys of object.
            await studentCourse.update(objToUpdate);
            res.json(studentCourse)
        } else {
            throw new Error('No existen campos válidos para actualizar')
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
