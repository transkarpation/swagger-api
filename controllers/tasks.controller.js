const knex = require('../knex')
const classValidator = require('class-validator')

const TaskValidationSchema = {
    name: 'taskValidation',
    properties: {
        email: [
            {
                type: 'isEmail'
            }
        ],
        password: [
            {
                type: 'isNotEmpty'
            }
        ]
    }
}

console.log(classValidator.registerSchema)

module.exports = {
    create: (req, res) => {
        res.send('tasks create')
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