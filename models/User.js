const Sequelize = require('sequelize');
const sequelize = require('../config/dbContext');

const User = sequelize.define('users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  age:Sequelize.NUMBER,
});

module.exports = User;
