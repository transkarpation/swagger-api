const {Router} = require('express')
const customersRouter = require('./cutomers.router')
const tasksRouter = require('./tasks.router')
const booksRouter = require('./books.router')
const authRouter = require('./auth.router')
const filesRouter = require('./files.router')

const r = Router()

r.use('/auth', authRouter)
r.use('/customers', customersRouter)
r.use('/tasks', tasksRouter)
r.use('/books', booksRouter)
r.use('/files', filesRouter)

module.exports = r;