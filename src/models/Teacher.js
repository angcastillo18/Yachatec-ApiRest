import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import {Course} from "./Course.js";

export const Teacher = sequelize.define('Teacher', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
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
}, { tableName: 'Teachers' });

Teacher.hasMany(Course, { foreignKey: 'teacherId',sourceKey: 'id' })
Course.belongsTo(Teacher, { foreignKey: 'teacherId',targetId: 'id' })