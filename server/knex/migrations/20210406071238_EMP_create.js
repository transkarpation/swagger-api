
exports.up = function(knex) {
  return knex.schema.createTable('emp', function(table) {
      table.integer('emptno').notNullable();
      table.string('ename', 10);
      table.string('job', 9);
      table.integer('mgr');
      table.date('hiredate');
      table.integer('sal');
      table.integer('comm');
      table.integer('deptno');
    //   (EMPNO integer NOT NULL,
    //     ENAME VARCHAR(10),
    //     JOB VARCHAR(9),
    //     MGR integer,
    //     HIREDATE DATE,
    //     SAL integer,
    //     COMM integer,
    //     DEPTNO integer)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('EMP')
};
