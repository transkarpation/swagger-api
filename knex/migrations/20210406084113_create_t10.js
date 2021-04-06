
exports.up = function(knex) {
  return knex.schema.createTable('t10', function(table) {
      table.integer('id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('t10')
};
