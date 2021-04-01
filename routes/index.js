const {Router} = require('express')
const customersRouter = require('./cutomers.router')
const tasksRouter = require('./tasks.router')
const booksRouter = require('./books.router')

const r = Router()

r.use('/customers', customersRouter)
r.use('/tasks', tasksRouter)
r.use('/books', booksRouter)

module.exports = r;