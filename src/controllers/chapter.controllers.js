import { Chapter } from "../models/Chapter.js";
import { Question } from "../models/Question.js";

export const getChapters = async (req, res) => {
    try {
        const chapters = await Chapter.findAll();

        res.json(chapters)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getChapter = async (req, res) => {
    try {
        const { id } = req.params
        const chapters = await Chapter.findByPk(id)

        if (!chapters) return res.status(404).json({ message: 'Chapter not found' })

        res.json(chapters)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateChapter = async (req, res) => {
    try {
        const { id } = req.params
        const bodyData = req.body
        //* update keys dynamically
        const fieldsAvailable = ['title', 'backgroundImg', "experience", "description", "order"] // keys available to update 
        //* filter body data, to update only available keys
        let dataSended = Object.entries(bodyData);
        let keysFiltered = dataSended.filter(([key, value]) => fieldsAvailable.includes(key));
        let objToUpdate = Object.fromEntries(keysFiltered);

        //check fields available
        if (Object.keys(objToUpdate).length !== 0) {
            const chapter = await Chapter.findByPk(id)
            if (!chapter) return res.status(404).json({ message: 'Chapter to update not found' })
            //*method to update some keys of object.
            await chapter.update(objToUpdate);
            res.json(chapter)
        } else {
            throw new Error('No existen campos válidos para actualizar')
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createChapter = async (req, res) => {
    //* this method create course, and relation with the model StudentCourse. relation M - M 
    try {
        //* chapter is object, questions is array
        const { chapter, questions } = req.body
        const { courseId, title, backgroundImg, experience, description, order } = chapter
        const newChapter = await Chapter.create({
            courseId,
            title,
            backgroundImg,
            experience,
            description,
            order
        })

        // console.log(students_ids);
        const questionsData = questions.map(question => {
            return {
                ...question,
                chapterId: newChapter.id
            }
        })
        // console.log(questionsData);
        const questionsCreated = await Question.bulkCreate(questionsData);

        res.json(questionsCreated)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getChapterQuestions = async (req, res) => {

    try {
        const { uid } = req //* uid from requireToken
        if (!uid) return res.status(401).json({ message: 'Unauthorized' })

        const { id } = req.params
        const chapter = await Chapter.findByPk(id)
        if (!chapter) return res.status(404).json({ message: 'Chapter not found' })

        const questions = await Question.findAll({
            where: {
                chapterId: id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt','chapterId']
            },
        })

        if (!questions) return res.status(404).json({ message: 'Questions not found' })

        return res.json(questions)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
