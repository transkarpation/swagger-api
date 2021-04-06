
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dept').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(`INSERT INTO DEPT VALUES
        (10, 'ACCOUNTING', 'NEW YORK'),
        (20, 'RESEARCH',   'DALLAS'),
        (30, 'SALES',      'CHICAGO'),
        (40, 'OPERATIONS', 'BOSTON')
      `)
    });
};
