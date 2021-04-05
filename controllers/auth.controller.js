const knex = require('../knex')

module.exports = {
    signin: async (req, res) => {
        res.send('signin')
    },

    signup: async (req, res) => {
        res.send('signup')
    }
}