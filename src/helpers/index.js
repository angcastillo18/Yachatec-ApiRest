import bcrypt from 'bcrypt';
import 'dotenv/config'
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;
export const hashPassword = (password) => {
    return bcrypt.hashSync(password, SALT_ROUNDS);
}

export const isMatch = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

export const generateToken = (payload) => {
    const expiresIn = 60 * 15;
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
        return {
            token,
            expiresIn
        }
    } catch (error) {
        console.log(error);
    }
}
