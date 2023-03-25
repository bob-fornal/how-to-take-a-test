module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Strong-54321!',
  DB: 'httat',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};