import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import { Chapter } from "./Chapter.js";
import { StudentCourse } from "./StudentCourse.js";

export const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalChapters: {
        type: DataTypes.INTEGER,
        default: 30
    },
}, { tableName: 'Courses' });

Course.hasMany(Chapter, { foreignKey: 'courseId', sourceKey: 'id' })
Chapter.belongsTo(Course, { foreignKey: 'courseId', targetId: 'id' })

Course.hasMany(StudentCourse, { foreignKey: 'courseId', sourceKey: 'id' })
StudentCourse.belongsTo(Course, { foreignKey: 'courseId', targetId: 'id' })
