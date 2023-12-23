import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import {Store} from "./Store.js";
import {Student} from "./Student.js";
import {Course} from "./Course.js";

export const ScholarLevel = sequelize.define('ScholarLevel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    grade: {
        type: DataTypes.ENUM,
        values: ['3ro de Primaria', '4to de Primaria',
            '5to de Primaria', '6to de Primaria', '1ro de Secundaria',
            '2do de Secundaria', '3ro de Secundaria', '4to de Secundaria',
            '5to de Secundaria'],
        allowNull: false,
    },
    section: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { tableName: 'ScholarLevels' });

//* relation 1 to 1,scholarLevel to store
ScholarLevel.hasOne(Store, { foreignKey: 'scholarLevelId',sourceKey: 'id' })
Store.belongsTo(ScholarLevel, { foreignKey: 'scholarLevelId',targetId: 'id' })

//* relation 1 to many,scholarLevel to student
ScholarLevel.hasMany(Student, { foreignKey: 'scholarLevelId',sourceKey: 'id' })
Student.belongsTo(ScholarLevel, { foreignKey: 'scholarLevelId',targetId: 'id' })

//* relation 1 to many,scholarLevel to Course
ScholarLevel.hasMany(Course, { foreignKey: 'scholarLevelId',sourceKey: 'id' })
Course.belongsTo(ScholarLevel, { foreignKey: 'scholarLevelId',targetId: 'id' })