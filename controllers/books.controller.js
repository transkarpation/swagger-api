const knex = require('../knex')
const { body, validationResult } = require('express-validator');

module.exports = {
    create: async (req, res) => {
        const {title, author} = req.body;
        const result = await knex('books')
            .returning(['id', 'title', 'author', 'created_at', 'updated_at'])
            .insert({
                title,
                author
            })
        res.send(result)
    },

    get: (req, res) => {
        res.send('tasks get')
    },

    getId: (req, res) => {
        res.send('tasks getId')
    },

    update: (req, res) => {
        res.send('tasks update')
    },

    delete: (req, res) => {
        res.send('tasks delete')
    }
}