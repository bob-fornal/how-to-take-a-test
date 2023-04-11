const express = require('express');
const passport = require('passport');

const authRouter = require('./auth.routes');

const router = express.Router();

const { root, tests } = require('./index.functionality');

router.use('/auth', authRouter);

router.get('/', root);
router.get('/tests', tests);

module.exports = router;
