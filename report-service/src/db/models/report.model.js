import { DataTypes } from "sequelize";
import { sequelize } from "..";

export const Report = sequelize.define('report', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    exam_question_id: {
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    answer_option: {
        type: DataTypes.INTEGER,
    },
    score: {
        type: DataTypes.INTEGER,
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
    },
    created_at: {
        type: DataTypes.DATE,
    },
    updated_at: {
        type: DataTypes.DATE,
    },
}, {
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});