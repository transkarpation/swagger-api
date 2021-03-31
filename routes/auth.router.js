const {Router} = require('express')

const r = Router();

r.post('/signin', (req, res) => {
    res.send('/signin')
})

r.post('/signup', (req, res) => {
    res.send('/signup')
})

module.exports = r;