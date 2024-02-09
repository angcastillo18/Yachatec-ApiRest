import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import { Question } from "./Question.js";

export const Chapter = sequelize.define('Chapter', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    backgroundImg: {
        type: DataTypes.STRING
    },
    experience: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

}, { tableName: 'Chapters', timestamps: false });

Chapter.hasMany(Question, { foreignKey: 'chapterId', sourceKey: 'id' })
Question.belongsTo(Chapter, { foreignKey: 'chapterId', targetId: 'id' })