const keys = require('./keys')

module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: keys.PASSWORD,
  DB: 'httat',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};