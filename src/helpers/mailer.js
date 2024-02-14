import nodemailer from "nodemailer";
import 'dotenv/config'

export const transporter  = nodemailer.createTransport({

    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: process.env.OUTLOOK_EMAIL,
        pass: process.env.OUTLOOK_PASSWORD
    },
    tls: {
        ciphers: 'SSLv3'
    }
})