import { sequelize } from "../database/db.js";
import {DataTypes} from 'sequelize';
import {StudentCourse} from "./StudentCourse.js";
import {Challenge} from "./Challenge.js";
import {AchievementStudent} from "./AchievementStudent.js";

export const Student = sequelize.define('Student', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING
    },
    experience: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    coins: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    parentEmail: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
}, { tableName: 'students' });
//* agregar en el segundo objeto , timestamps: false si es que no quiero que cree el created_at y updated_at por default

Student.hasMany(StudentCourse, { foreignKey: 'studentId',sourceKey: 'id' })
StudentCourse.belongsTo(Student, { foreignKey: 'studentId',targetId: 'id' })

Student.hasMany(Challenge, { foreignKey: 'studentId',sourceKey: 'id' })
Challenge.belongsTo(Student, { foreignKey: 'studentId',targetId: 'id' })

Student.hasMany(AchievementStudent, { foreignKey: 'studentId',sourceKey: 'id' })
AchievementStudent.belongsTo(Student, { foreignKey: 'studentId',targetId: 'id' })