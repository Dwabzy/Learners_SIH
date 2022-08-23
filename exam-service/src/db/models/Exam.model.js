
import { sequelize } from "..";
import { DataTypes } from "sequelize";

export const Exam = sequelize.define('exam', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    time_limit: {
        type:DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    info: {
        type: DataTypes.JSONB
    },
    organization_id: {
        type: DataTypes.INTEGER
    },
    created_by: {
        type: DataTypes.INTEGER
    },
    target_classes: {
        type: DataTypes.JSONB
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