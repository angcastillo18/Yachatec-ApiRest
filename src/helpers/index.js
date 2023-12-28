import bcrypt from 'bcrypt';
import 'dotenv/config'

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;
export const hashPassword =  (password ) => {
    const hashedPassword =  bcrypt.hashSync(password, SALT_ROUNDS);
    return hashedPassword;
}
