
exports.up = function(knex) {
    // CREATE TABLE DEPT
    //     (DEPTNO integer,
    //     DNAME VARCHAR(14),
    //     LOC VARCHAR(13) )
  return knex.schema.createTable('dept', function(table) {
      table.integer('deptno');
      table.string('dname', 14);
      table.string('loc', 13);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('DEPT')
};
