const knex = require('../knex')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/jwt.config')

knex.raw('select 1+1 as result')
.then(res => {
    console.log('knex ok')
})
.catch(err => {
    console.log(err);
    process.exit(1);
});

module.exports = {
    signin: async (req, res) => {
        const {email, id} = req.user
        const token = jwt.sign({ id }, secret)
        res.send({email, token})
    },

    signup: async (req, res) => {
        const {email, id} = req.user;
        const token = jwt.sign({ id }, secret);

        res.send({email, token})
    }
}