import Sequelize from "sequelize";
import 'dotenv/config'

const DATABASE = process.env.DATABASE;
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const HOST_DB = process.env.HOST_DB;
const PORT_DB = process.env.PORT_DB

export const sequelize = new Sequelize(DATABASE, USER_NAME, PASSWORD, {
    host: HOST_DB,
    dialect: 'postgres',
    port: PORT_DB,
});