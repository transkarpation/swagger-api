const faker = require('faker')
let inserts = [];

[1, 2, 3].forEach(id => {
  for(let i = 0; i<10; i++) {
    inserts.push({
      user_id: id,
      title: faker.lorem.words(2),
      author: faker.name.findName()
    })
  }
})

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert(inserts);
    });
};
