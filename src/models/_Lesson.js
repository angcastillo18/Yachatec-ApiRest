// import { sequelize } from "../database/db.js";
// import { DataTypes } from 'sequelize';
// import {Question} from "./Question.js";

// export const Lesson = sequelize.define('Lesson', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     experience: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0
//     },
//     title:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     order:{
//         type: DataTypes.INTEGER,
//         defaultValue: 0
//     }

// }, { tableName: 'Lessons',timestamps: false });

// Lesson.hasMany(Question, { foreignKey: 'lessonId',sourceKey: 'id' })
// Question.belongsTo(Lesson, { foreignKey: 'lessonId',targetId: 'id' })