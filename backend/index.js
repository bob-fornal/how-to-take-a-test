require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require("cors");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const app = express();
var corsOptions = {
  origin: `http://localhost:${port}`
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./model');
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
// async function init() {
//   try {
//     await db.sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }  
// }
// init();

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.get('/', (req, res) => {
  res.status(401).send('Unauthorized');
});

// Register
app.post('/api/register', (req, res) => {
  // our register logic goes here...
});

// Login
app.post('/api/login', (req, res) => {
  // our login logic goes here
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});