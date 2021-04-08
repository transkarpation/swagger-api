// CREATE TABLE T1 (ID INTEGER)
exports.up = function(knex) {
  return knex.schema.createTable('t1', function (table) {
      table.integer('id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('t1')
};
