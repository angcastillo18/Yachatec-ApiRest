import { ScholarLevel } from "../models/ScholarLevel.js";
import { Store } from "../models/Store.js";
import { StoreItem } from "../models/StoreItem.js";

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

export const getScholarLevelStoreData = async (req, res) => {

    try {
        const { uid } = req //* uid from requireToken
        if (!uid) return res.status(401).json({ message: 'Unauthorized' })
        
        const { id } = req.params
        const storeInfo = await Store.findOne({
            where:{
                scholarLevelId: id
            },
            include: [
                {
                    model: StoreItem,
                    attributes: {
                        exclude: ['createdAt','updatedAt','storeId']
                    }
                }
            ],
            attributes: {
                exclude: ['createdAt','updatedAt','scholarLevelId']
            },
        })

        if (!storeInfo) return res.status(404).json({ message: 'Scholar Level not found' })

        return res.json(storeInfo)

    }catch (error) {
        return res.status(500).json({ message: error.message })
    }
}