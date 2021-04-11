
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('emp').del()
    .then(async function () {
      // Inserts seed entries
      return knex.raw(`INSERT INTO EMP VALUES 
        (7369, 'SMITH',  'CLERK', 7902, '1980-12-17',  800, NULL, 20),
        (7499, 'ALLEN',  'SALESMAN',  7698, '1981-2-20', 1600,  300, 30),
        (7521, 'WARD',   'SALESMAN',  7698, '1981-2-22', 1250,  500, 30),
        (7566, 'JONES',  'MANAGER',   7839, '1981-4-2',  2975, NULL, 20),
        (7654, 'MARTIN', 'SALESMAN',  7698, '1981-9-28', 1250, 1400, 30),
        (7698, 'BLAKE',  'MANAGER',   7839, '1981-5-1',  2850, NULL, 30),
        (7782, 'CLARK',  'MANAGER',   7839, '1981-6-9',  2450, NULL, 10),
        (7788, 'SCOTT',  'ANALYST',   7566, '1982-12-9', 3000, NULL, 20),
        (7839, 'KING',   'PRESIDENT', NULL, '1981-11-17', 5000, NULL, 10),
        (7844, 'TURNER', 'SALESMAN',  7698, '1981-9-8',  1500,    0, 30),
        (7876, 'ADAMS',  'CLERK',     7788, '1983-1-12', 1100, NULL, 20),
        (7900, 'JAMES',  'CLERK',     7698, '1981-12-3',   950, NULL, 30),
        (7902, 'FORD',   'ANALYST',   7566, '1981-12-3',  3000, NULL, 20),
        (7934, 'MILLER', 'CLERK',     7782, '1982-1-23', 1300, NULL, 10)`
      )
    });
};