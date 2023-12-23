import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';

export const Challenge = sequelize.define('Challenge', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    picture:{
        type: DataTypes.STRING
    },
    limitDate:{
        type: DataTypes.DATE
    },
    rewardExperience:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    rewardCoins:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    type:{
        type: DataTypes.ENUM,
        values: ['example1', 'example2', 'example3'],
        allowNull: false
    },
    progress:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    progressMax:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

}, { tableName: 'Challenges',timestamps: false });