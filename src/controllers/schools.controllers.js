import { School } from "../models/School.js";


export const getSchools = async (req, res) => {
    try {
        const schools = await School.findAll();
        res.json(schools)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getSchool = async (req, res) => {
    try {
        const { id } = req.params
        const school = await School.findByPk(id)

        if (!school) return res.status(404).json({ message: 'School not found' })

        res.json(school)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createSchool = async (req, res) => {

    try {
        const { name, ownerEmail } = req.body
        const newSchool = await School.create({
            name,
            ownerEmail
        })
        res.json(newSchool)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const updateSchool = async (req, res) => {
    try {
        const { id } = req.params
        const bodyData = req.body
        //* update keys dynamically
        const fieldsAvailable = ['name', 'ownerEmail'] // keys available to update 
        //* filter body data, to update only available keys
        let dataSended = Object.entries(bodyData);
        let keysFiltered = dataSended.filter(([key, value]) => fieldsAvailable.includes(key));
        let objToUpdate = Object.fromEntries(keysFiltered);

        //check fields available
        if (Object.keys(objToUpdate).length !== 0) {
            const school = await School.findByPk(id)
            if (!school) return res.status(404).json({ message: 'School to update not found' })
            //*method to update some keys of object.
            await school.update(objToUpdate);
            res.json(school)
        } else {
            throw new Error('No existen campos válidos para actualizar')
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteSchool = async (req, res) => {
    try {
        const { id } = req.params
        const schoolDeleted = await School.destroy({ where: { id } })
        if (!schoolDeleted) return res.status(404).json({ message: 'School to delete not found' })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

