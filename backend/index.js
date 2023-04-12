require('dotenv').config({path:'../.env'});
const cors = require("cors");
const express = require('express');
const fs = require('fs').promises;
const http = require('http');
const passport = require('passport');
const session = require('express-session');

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'helloworld',
  resave: true,
  saveUninitialized: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./middleware/auth.middleware');

const db = require('./model');
const Role = db.role;

const mainRouter = require('./routes/index.routes');

db.sequelize.sync().then(() => {  
  console.log('db connected');
});

app.use('/api', mainRouter);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});