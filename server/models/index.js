'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

// Load environment variables from .env file
require('dotenv').config();

let sequelize;
if (env === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',  // or mysql or any other DBMS you're using
    protocol: 'mysql', // specify protocol if needed
    logging: false,       // Disable logging in production
  });
} else {
  // Load environment variables from .env file (in root of server folder)
  // following variables should be defined in .env file:
  // DB_NAME, DB_USER, DB_PASSWORD, DB_HOST
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',  // adjust dialect to your DBMS (mysql, postgres, etc.)
      logging: console.log, // Enable logging in development
    }
  );
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    console.log('Loading model:', file);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
