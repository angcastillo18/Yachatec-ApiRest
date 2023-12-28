import { Store } from "../models/Store.js";


export const getStores = async (req, res) => {
    try {
        const stores = await Store.findAll();
        res.json(stores)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getStore = async (req, res) => {
    try {
        const { id } = req.params
        const store = await Store.findByPk(id)

        if (!store) return res.status(404).json({ message: 'Store not found' })

        res.json(store)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createStore = async (req, res) => {

    try {
        const { scholarLevelId, rotationTime } = req.body
        const newStore = await Store.create({
            scholarLevelId,
            rotationTime,
        })
        res.json(newStore)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
