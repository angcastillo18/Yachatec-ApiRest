import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';

export const StudentCourse = sequelize.define('StudentCourse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    currentChapterOrder: {
        type: DataTypes.INTEGER,
        default: 0.0
    },
}, { tableName: 'StudentCourses', timestamps: false });

// StudentCourse.sync({ force: true})
// .then(() => {
// console.log('Estructura del modelo actualizada');
// })
// .catch(error => {
// console.error('Error:', error);
// });