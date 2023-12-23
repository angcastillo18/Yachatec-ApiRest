import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import {Teacher} from "./Teacher.js";
import {ScholarLevel} from "./ScholarLevel.js";

export const School = sequelize.define('School', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ownerEmail:{
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false
    },
}, { tableName: 'Schools' });

//*relation 1 to many, from School to teacher.
School.hasMany(Teacher, { foreignKey: 'schoolId',sourceKey: 'id' })
Teacher.belongsTo(School, { foreignKey: 'schoolId',targetId: 'id' })

//* relation 1 to many, from School to ScholarLevel , ScholarLevel will have a foreign key.
School.hasMany(ScholarLevel, { foreignKey: 'schoolId',sourceKey: 'id' })
ScholarLevel.belongsTo(School, { foreignKey: 'schoolId',targetId: 'id' })   