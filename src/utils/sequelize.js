// src/lib/sequelize.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  logging: console.log, // Logs all SQL queries
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export { sequelize, connectToDatabase };
