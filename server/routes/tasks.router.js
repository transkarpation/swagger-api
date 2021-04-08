const {Router} = require('express')
const tasksCtrl = require('../controllers/tasks.controller')
const r = Router()

r.get('/', tasksCtrl.get)

r.get('/:id', tasksCtrl.getId)

r.post('/', tasksCtrl.create)

r.put('/:id', tasksCtrl.update)

r.delete('/:id', tasksCtrl.delete)

module.exports = r