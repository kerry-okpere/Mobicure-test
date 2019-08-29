const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
export const connection = new Sequelize('kentell', 'kerry', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});