const {Router} = require('express')

const r = Router()

r.get('/', (req, res) => {
    res.send('get /customers/')
})

r.get('/:id', (req, res) => {
    res.send('get /customers/:id')
})

r.post('/', (req, res) => {
    res.send('post /customers/')
})

r.put('/:id', (req, res) => {
    res.send('put /customers/:id')
})

r.delete('/:id', (req, res) => {
    res.send('delete /customers/:id')
})

module.exports = r