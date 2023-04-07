const Sequelize = require('sequelize');
const sequelize = require('../config/dbContext');

const User = sequelize.define('users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt:Sequelize.DATE,
});

module.exports = User;
