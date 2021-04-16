const {Router} = require('express')
const cryptoService = require('../modules/cryptoService')

const r = Router();

r.get('/', async (req, res) => {
    let result = await cryptoService()
    res.send(result)
})