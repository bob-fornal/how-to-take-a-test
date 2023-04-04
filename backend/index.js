require('dotenv').config();
const cors = require("cors");
const express = require('express');
const fs = require('fs').promises;
const http = require('http');
const passport = require('passport');
const session = require('express-session')
const bcrypt = require('bcrypt');

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'helloworld',
  resave: true,
  saveUninitialized: true,
}))
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./middleware/auth');

const db = require('./model');
const Role = db.role;

db.sequelize.sync().then(() => {
  console.log('db connected');
});

app.get('/', (req, res) => {
  res.status(401).send('Unauthorized');
});

// Register
app.post('/api/register', async (req, res) => {

  const { username, email, password } = req.body;

  if(!email || !username || !password){
    return res.status(400).send({ success: false, message: 'Username, email, and password are required.' })
  }


  // Unsure if keeping this in
  // if(typeof email !== 'string'){
  //   return res.status(400).send({ success: false, message: 'Username must be a string' })
  // }

  // const cleanedEmail = email.toLowerCase().trim();

  // check if the email already exists
  const existingEmail = await db.user.findOne({ where: { email } });
  if (existingEmail) {
    return res.status(400).send({success: false, message: 'Email already exists' });
  }

  // check if the username already exists
  const existingUsername = await db.user.findOne({ where: { username } });
  if (existingUsername) {
    return res.status(400).send({success: false, message: 'Username already exists' });
  }

  // hash the password using bcrypt
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // if neither email nor username exist, create a new user
  const newUser = await db.user.create({username, email, password: hashedPassword});
  console.log(newUser)
  return res.status(200).send({ success: true });
});

// Login
app.post('/api/login', passport.authenticate('local', { session: false }), async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  
  const user = await db.user.findOne({ where: { username: username }});
  console.log('from DB', user);

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