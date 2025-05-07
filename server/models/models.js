const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Сustomer = sequelize.define('customer', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true,},
  message: {type: DataTypes.STRING},
})

module.export = {
  Сustomer
}
