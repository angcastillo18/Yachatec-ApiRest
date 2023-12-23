import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';

export const StudentCourse = sequelize.define('StudentCourse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    progress:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    progressMax:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    currentChapterLesson:{ //* why? IT COULD BE  json to save chapter and lesson
        type: DataTypes.JSON,
        default:{
            chapter: 0,
            lesson: 0
        }
    }
}, { tableName: 'StudentCourses',timestamps: false });