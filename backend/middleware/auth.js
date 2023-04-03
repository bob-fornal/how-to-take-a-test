const passport = require('passport');
const passportLocal = require('passport-local');

const LocalStrategy = passportLocal.Strategy;

const db = require('../model/index')
passport.use(new LocalStrategy(
  {
  usernameField: 'username',
  passwordField: 'password',
  },
  async function(username, password, done) {
    console.log('Authenticating login')
    const user = await db.user.findOne({ where: { username: username }});

    if(!user){
      return done(null, false, {message: "No user found"})
    }

    console.log(user)
    return done(null, user, {message: 'User logged in successfully'})
  }
));
