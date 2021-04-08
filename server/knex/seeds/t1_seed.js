
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('t1').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(`INSERT INTO T1 VALUES (1)`)
    })
};
