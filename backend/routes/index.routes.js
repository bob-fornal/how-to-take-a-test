const express = require('express');
const passport = require('passport');

const authRouter = require('./auth.routes');

const router = express.Router();

router.use('/auth', authRouter);

router.get('/', (req, res) => {
  res.status(401).send('Unauthorized');
});

router.get('/tests', async (req, res) => {
  const data = await fs.readFile('./data/tests.json', 'utf8');
  res.status(200).send(data);
});

module.exports = router;