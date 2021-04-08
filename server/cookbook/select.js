const knex = require('../knex')

knex.select().from('emp')
    .then(results => console.log(results))