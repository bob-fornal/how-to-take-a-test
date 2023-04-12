const bcrypt = require('bcrypt');
const db = require('../model');

const register = async (req, res) => {

  const { username, email, password } = req.body;

  if(!email || !username || !password){
    return res.status(400).send({ success: false, message: 'Username, email, and password are required.' });
  }

  // check if the username already exists
  const existingUsername = await db.user.findOne({ where: { username } });
  if (existingUsername) {
    return res.status(409).send({success: false, message: 'Invalid username' });
  }

  // hash the password using bcrypt
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // if neither email nor username exist, create a new user
  await db.user.create({username, email, password: hashedPassword});
  res.status(200).send({ success: true });
}

module.exports = {
  register
};
