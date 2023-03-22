require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const {
  DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  port: DB_PORT,
  logging:false,
  define:{
    timestamps: false
  }
});


const modelDefiners = [];
const modelsPath = path.join(__dirname, '/models');
fs.readdirSync(modelsPath)
  .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .forEach((file) => {
    modelDefiners.push(require(path.join(modelsPath, file)));
  });

modelDefiners.forEach((model) => {
  model(sequelize);
});

module.exports = {
  ...sequelize.models,
   conn: sequelize,
};


