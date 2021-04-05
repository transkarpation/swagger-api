const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { secret } = require("./jwt.config");
const knex = require('../knex')
const bcrypt = require('bcrypt')

const options = {
  jwtFromRequest: ExtractJwt,
  secretOrKey: secret,
};

passport.use(
  "signup",
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (username, password, done) => {
        console.log('LocalStrategyCb')
        const result = await knex('users').where({email: username})
        if (result.length !== 0) {
          return done(null, null)
        }
        const hashedPass = await bcrypt.hash('' + password, 10)
        const results = await knex('users')
          .returning(['id', 'email', 'password'])
          .insert({
            email: username,
            password: hashedPass
          })

        done(null, results[0])
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (username, password, done) => {
      const result = await knex('users').where({email: username})

      if (result.length === 0) {
        return done(null, null)
      }

      const user = result[0]
      const isValidPassword = await bcrypt.compare(password, user.password);
      if(!isValidPassword) {
        return done(null, null)
      }

      return done(null, user)
    }
  )
)
