import { DataTypes } from "sequelize";
import { sequelize } from "..";

export const Question = sequelize.define('exam_question_bank', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    question: {
        type: DataTypes.TEXT,
    },
    option_1: {
        type: DataTypes.TEXT
    },
    option_2:{
        type: DataTypes.TEXT
    },
    option_3 :{
        type: DataTypes.TEXT
    },
    option_4: {
        type: DataTypes.TEXT
    },
    answer: {
        type: DataTypes.TEXT
    },
    sub_category_id: {
        type: DataTypes.INTEGER
    },
    difficulty_level_id: {
        type: DataTypes.TEXT
    },
    info: {
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