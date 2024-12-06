// models/user.js
import { DataTypes } from 'sequelize';
import  {sequelize}  from '../src/utils/sequelize'; // Adjust the path to your Sequelize instance

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // Name of the table in your database
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

export default User;
