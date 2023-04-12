const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const db = require('../model');

const { register } = require('./auth.functionality');

const router = express.Router();
    
// Register
router.post('/register', register);

// Login
router.post('/login', passport.authenticate('local', { session: false }), async (req, res) => {

  const safeUserToSend = {id: req.user.id, username: req.user.username, email: req.user.email};

  const token = jwt.sign(safeUserToSend, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).send({ token, user: safeUserToSend, success: true });
});

// Logout
router.post('/logout', passport.authenticate('jwt', { session: false }), async (req, res) => {
  res.status(200).send({ success: true });
});

router.get('/testAuth', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).send('authenticated');
})

module.exports = router;