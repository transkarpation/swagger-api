const knex = require('../knex')

// knex('users')
// .returning(['id', 'email', 'password', 'created_at'])
// .insert({
//     email: 'u1@i.ua',
//     password: '123'
// }).then(result => {
//     console.log(result[0])
// })

knex('users')
.where({email: 'u1@i.ua'})
    .then(res => {
        console.log(res)
    })