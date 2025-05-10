const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Сustomer = sequelize.define('customers', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING, unique: true,},
  message: {type: DataTypes.STRING},
})

module.exports = {Сustomer}