import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';

export const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    statement:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.ENUM,
        values: ['Simple','Multiple','DragAndDrop', 'Reorder','Audio','Video'],
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