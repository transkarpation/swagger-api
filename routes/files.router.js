const {Router} = require('express')
const formidable = require('formidable')


const r = Router()

r.post('/', async (req, res, next) => {
    const form = formidable({ multiples: true, uploadDir: 'uploads/', keepExtensions: true });
    form.parse(req, function(err, fields, fls) {
        if (err) {
            return next(err)
        }
        console.log(fields)
        const {files} = fls;
        if (files.length) {
            console.log('many files')
        } else {
            console.log(files.path)
        }
    })
})

module.exports = r;