
import { Sequelize } from 'sequelize';

console.log('DB name', process.env.DB_NAME);

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});