import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import {Lesson} from "./Lesson.js";

export const Chapter = sequelize.define('Chapter', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    backgroundImg:{
        type: DataTypes.STRING
    },
    order:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

}, { tableName: 'Chapters',timestamps: false });

Chapter.hasMany(Lesson, { foreignKey: 'chapterId',sourceKey: 'id' })
Lesson.belongsTo(Chapter, { foreignKey: 'chapterId',targetId: 'id' })