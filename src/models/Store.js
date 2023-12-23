import { sequelize } from "../database/db.js";
import { DataTypes } from 'sequelize';
import {StoreItem} from "./StoreItem.js";

export const Store = sequelize.define('Store', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rotationTime: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { tableName: 'Stores' });

Store.hasMany(StoreItem, { foreignKey: 'storeId',sourceKey: 'id' })
StoreItem.belongsTo(Store, { foreignKey: 'storeId',targetId: 'id' })