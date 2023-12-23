import { sequelize } from "../database/db.js";
import {DataTypes} from 'sequelize';

export const Student = sequelize.define('Student', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING
    },
    experience: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    coins: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    parentEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, { tableName: 'students' });
//* agregar en el segundo objeto , timestamps: false si es que no quiero que cree el created_at y updated_at por default