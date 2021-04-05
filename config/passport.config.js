const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { secret } = require("./jwt.config");
const knex = require('../knex')

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
        if (result.length > 0) {
          done()
        }
        console.log(user) 
    }
  )
);
