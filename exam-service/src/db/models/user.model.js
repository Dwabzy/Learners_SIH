import { DataTypes } from "sequelize";
import { sequelize } from "..";

export const User = sequelize.define('user', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.TEXT,
    },
    last_name: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
    mobile: {
        type: DataTypes.TEXT
    },
    username: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.TEXT
    },
    user_role_id: {
        type: DataTypes.INTEGER
    },
    gender: {
        type: DataTypes.TEXT
    },
    dob: {
        type: DataTypes.TEXT
    },
    state: {
        type: DataTypes.TEXT
    },
    organization_id: {
        type: DataTypes.INTEGER
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
}, {
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    // Other model options go here
});