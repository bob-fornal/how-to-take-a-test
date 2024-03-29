const config = require('../config/database.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    dialectOptions: {
      ssl: {
          rejectUnauthorized: true,        
      }
  },
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    logging: (info) => console.log(info),
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('../model/user.js')(sequelize, Sequelize);

module.exports = db;
