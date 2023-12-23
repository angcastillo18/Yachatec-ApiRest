import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import {AchievementStudent} from "./AchievementStudent.js";

export const Achievement = sequelize.define('Achievement', {
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
        type: DataTypes.STRING,
    },
    rewardExperience:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    rewardCoins:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

}, { tableName: 'Achievements',timestamps: false });

Achievement.hasMany(AchievementStudent, { foreignKey: 'achievementId',sourceKey: 'id' })
AchievementStudent.belongsTo(Achievement, { foreignKey: 'achievementId',targetId: 'id' })