const {Router} = require('express')
const customersRouter = require('./cutomers.router')

const r = Router()

r.use('/customers', customersRouter)

module.exports = r;