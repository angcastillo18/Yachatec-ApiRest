import { StoreItem } from "../models/StoreItem.js";


export const getStoreItems = async (req, res) => {
    try {
        const storeItems = await StoreItem.findAll();
        res.json(storeItems)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getStoreItem = async (req, res) => {
    try {
        const { id } = req.params
        const storeItem = await StoreItem.findByPk(id)

        if (!storeItem) return res.status(404).json({ message: 'Store Item not found' })

        res.json(storeItem)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createStoreItem = async (req, res) => {

    try {
        const { storeId, category, name, cost, picture, quantity } = req.body
        const newStoreItem = await StoreItem.create({
            storeId,
            category,
            name,
            cost,
            picture,
            quantity
        })
        res.json(newStoreItem)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
