const knex = require('../knex')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/jwt.config')

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