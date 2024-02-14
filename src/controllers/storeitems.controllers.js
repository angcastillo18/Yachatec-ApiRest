import { StoreItem } from "../models/StoreItem.js";
import { Student } from "../models/Student.js"
import {transporter} from "../helpers/mailer.js"

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

export const swapStoreItem = async (req, res) => {

    try {
        //* validate user Student
        const { uid } = req //* uid from requireToken
        const student = await Student.findByPk(uid)
        if (!student) return res.status(404).json({ message: 'Student not found' })

        //* validate store item id
        const { id: storeItemId } = req.params
        const storeItem = await StoreItem.findByPk(storeItemId)
        if (!storeItem) return res.status(404).json({ message: 'Store Item not found' })

        //* validate if student has the necessary coins to swap item
        if (student.coins < storeItem.cost) return res.status(400).json({ message: 'Not enough coins' })

        //* send item password to student email 

        const mailOptions = {
            from: `"Yachatec" < ${process.env.OUTLOOK_EMAIL}>`,
            to: student.email,
            subject: `Gift Card de ${storeItem.name}`,
            html: `
                <h1>Felicidades, Haz canjeado una Gift Card de ${storeItem.name}</h1>
                <h2>El código digital es: #uZmBreVT%F9pJhjJGyi$y </h2>
                ` 
        }

        const emailSended=await transporter.sendMail(mailOptions)
        // console.log("emailSended",emailSended.messageId);

        //* update student coins
        student.coins -= storeItem.cost;
        await student.save();

        res.json({"message":"giftcard successfully claimed","student_coins":student.coins})

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
