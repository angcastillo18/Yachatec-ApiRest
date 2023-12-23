import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';

export const AchievementStudent = sequelize.define('AchievementStudent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false
    },
}, { tableName: 'AchievementStudents' });