require('dotenv').config();
const fs = require('fs').promises;
const http = require('http');
const express = require('express');
const cors = require("cors");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./model');
const Role = db.role;

db.sequelize.sync().then(() => {
  console.log('db connected');
});

app.get('/', (req, res) => {
  res.status(401).send('Unauthorized');
});

// Register
app.post('/api/register', (req, res) => {
  console.log('/api/register', req.body);
  res.status(200).send(req.body);
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('/api/login', username, password);
  
  const user = await db.user.findOne({ where: { username: username }});
  console.log('/api/login from DB', user);

  const loginSuccess = user.password === password;
  console.log('/api/login ... password match?', loginSuccess);
  res.status(200).send({ success: loginSuccess });
});

// Logout
app.post('/api/logout', async (req, res) => {
  console.log('/api/logout fired');
  res.status(200).send('');
});

app.get('/api/tests', async (req, res) => {
  const data = await fs.readFile('./data/tests.json', 'utf8');
  res.status(200).send(data);
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});