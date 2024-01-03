import jwt from "jsonwebtoken"
import 'dotenv/config'

export const requireRefreshToken = (req, res, next) => {

    try {
        const { refreshToken } = req.cookies

        if (!refreshToken) throw new Error('No refresh token provided')

        const { uid } = jwt.verify(refreshToken, process.env.JWT_REFRESH)
        req.uid = uid; //* send to next middleware for req
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }
}