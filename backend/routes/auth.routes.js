const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken')
const passport = require('passport');

const db = require('../model');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {

  const { username, email, password } = req.body;

  if(!email || !username || !password){
    return res.status(400).send({ success: false, message: 'Username, email, and password are required.' });
  }

  // check if the email already exists
  const existingEmail = await db.user.findOne({ where: { email } });
  if (existingEmail) {
    return res.status(409).send({success: false, message: 'Email already exists' });
  }

  // check if the username already exists
  const existingUsername = await db.user.findOne({ where: { username } });
  if (existingUsername) {
    return res.status(409).send({success: false, message: 'Username already exists' });
  }

  // hash the password using bcrypt
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // if neither email nor username exist, create a new user
  await db.user.create({username, email, password: hashedPassword});

  return res.status(200).send({ success: true });
});

// Login
router.post('/login', passport.authenticate('local', { session: false }), async (req, res) => {

  const safeUserToSend = {id: req.user.id, username: req.user.username, email: req.user.email};

  const token = jwt.sign(safeUserToSend, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).send({ token, user: safeUserToSend, success: true });
});

router.get('/testAuth', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).send('authenticated');
})

module.exports = router;