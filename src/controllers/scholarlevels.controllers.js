import { ScholarLevel } from "../models/ScholarLevel.js";


export const getScholarLevels = async (req, res) => {
    try {
        const scholarLevels = await ScholarLevel.findAll();
        res.json(scholarLevels)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getScholarLevel = async (req, res) => {
    try {
        const { id } = req.params
        const scholarLevel = await ScholarLevel.findByPk(id)

        if (!scholarLevel) return res.status(404).json({ message: 'Scholar Level not found' })

        res.json(scholarLevel)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createScholarLevel = async (req, res) => {

    try {
        const { schoolId, grade, section } = req.body
        const newScholarLevel = await ScholarLevel.create({
            schoolId,
            grade,
            section
        })
        res.json(newScholarLevel)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
