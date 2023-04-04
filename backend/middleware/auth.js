const passport = require('passport');
const passportLocal = require('passport-local');
const passportJWT = require('passport-jwt')
const bcrypt = require('bcrypt')

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;

const db = require('../model/index')

passport.use(new LocalStrategy(
  {
  usernameField: 'username',
  passwordField: 'password',
  },
  async (username, password, done) => {
    console.log('Authenticating login')
    const user = await db.user.findOne({ where: { username: username }});

    if(!user){
      return done(null, false, {message: "No user found"})
    }

    const matchingPassword = await bcrypt.compare(password, user.password)

    console.log(matchingPassword)

    if(!matchingPassword) {
      return done(null, false, {message: 'Password did not match user'})
    }

    console.log('Login Successful. Logged in: ', user.username)
    return done(null, user, {message: 'User logged in successfully'})
  }
));

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretGoesHere',
    },
    async(jwtPayload, cb) => {
      // find the user in db if needed.
      db.user.findOne({ where: { username: jwtPayload.username } })
        .then((user) => {
          if (!user) {
            cb(null, false);
          }
          cb(null, user);
        })
        .catch((err) => cb(err, false));
    }
  )
);