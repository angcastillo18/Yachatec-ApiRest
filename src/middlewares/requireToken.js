import jwt from "jsonwebtoken"
import 'dotenv/config'

export const requireToken = (req, res, next) => {

    try {
        console.log(req.headers);
        let token = req.headers?.authorization
        if (!token) {
            throw new Error("No token provided with Bearer format")
            // return res.status(401).json({ message: "No token provided" })
        }
        token = token.split(" ")[1]
        const { uid } = jwt.verify(token, process.env.JWT_SECRET) //decode
        req.uid = uid; //* send to next middleware for req

        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }
}