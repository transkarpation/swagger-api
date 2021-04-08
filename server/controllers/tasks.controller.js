const knex = require('../knex')
const { body, validationResult } = require('express-validator');

module.exports = {
    create: [
        body('title').isLength({min: 4}),
        async (req, res) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            res.send('tasks create')
        }
    ],

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