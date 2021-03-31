const {Router} = require('express')
const customersRouter = require('./cutomers.router')
const tasksRouter = require('./tasks.router')

const r = Router()

r.use('/customers', customersRouter)
r.use('/tasks', tasksRouter)

module.exports = r;