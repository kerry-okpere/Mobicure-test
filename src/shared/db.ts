const Sequelize = require('sequelize');
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from "../config/env";

export const connection = new Sequelize( DB_NAME,  DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql'
});