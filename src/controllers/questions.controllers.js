import { Question } from "../models/Question.js";

export const getQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();

        res.json(questions)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const questions = await Question.findByPk(id)

        if (!questions) return res.status(404).json({ message: 'Question not found' })

        res.json(questions)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const bodyData = req.body
        //* update keys dynamically
        const fieldsAvailable = ["chapterId", "description", "type", "statement", "answer", "options"] // keys available to update 
        //* filter body data, to update only available keys
        let dataSended = Object.entries(bodyData);
        let keysFiltered = dataSended.filter(([key, value]) => fieldsAvailable.includes(key));
        let objToUpdate = Object.fromEntries(keysFiltered);

        //check fields available
        if (Object.keys(objToUpdate).length !== 0) {
            const question = await Question.findByPk(id)
            if (!question) return res.status(404).json({ message: 'Question to update not found' })
            //*method to update some keys of object.
            await question.update(objToUpdate);
            res.json(question)
        } else {
            throw new Error('No existen campos válidos para actualizar')
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createQuestion = async (req, res) => {
    try {
        const { chapterId, description, type, statement, answer, options } = req.body
        const newQuestion = await Question.create({
            chapterId,
            description,
            type,
            statement,
            answer,
            options,
        })

        res.json(newQuestion)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

