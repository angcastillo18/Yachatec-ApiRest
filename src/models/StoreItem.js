import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';

export const StoreItem = sequelize.define('StoreItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: {
        type: DataTypes.ENUM,
        values: ['Entretenimiento', 'Juegos', 'Estudio'],
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    picture: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, { tableName: 'StoreItems' });