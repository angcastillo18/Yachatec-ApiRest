import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';

export const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM,
        values: ['Simple', 'DragAndDrop', 'Reorder','Audio','Video'],
        allowNull: false,
    },
    answer:{
        type: DataTypes.JSON,
        allowNull: false
    },
    options:{
        type: DataTypes.JSON,
        allowNull: false
    },
    audioUrl:{
        type: DataTypes.STRING,
    },
    videoUrl:{
        type: DataTypes.STRING,
    }

}, { tableName: 'Questions',timestamps: false });