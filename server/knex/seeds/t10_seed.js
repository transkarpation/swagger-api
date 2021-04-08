
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('t10').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(`INSERT INTO T10 VALUES 
        (1),
        (2),
        (3),
        (4),
        (5),
        (6),
        (7),
        (8),
        (9),
        (10)
      `)
    });
};
