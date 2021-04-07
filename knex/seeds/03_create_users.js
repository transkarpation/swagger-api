const bcrypt = require('bcrypt')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const hashedPass = await bcrypt.hash('123', 10)
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'u1@i.ua', password: hashedPass },
        { email: 'u2@i.ua', password: hashedPass },
        { email: 'u3@i.ua', password: hashedPass }
      ]);
    });
};
