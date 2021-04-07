const knex = require('../knex')

knex.raw(`select count(id) as total from books`)
    .then(res => console.log(res.rows))

knex('books').count('id as total')
    .then(res => console.log(res))