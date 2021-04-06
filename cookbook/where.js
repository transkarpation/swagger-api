const knex = require('../knex')

// knex.raw(`select * from emp where "COMM" IS NOT NULL`).then(res => console.log(res.rows))
// knex('emp').whereNotNull('COMM').then(res => console.log(res))

// knex.raw(`select * from emp where deptno=10 or comm is not null or sal <=200 and deptno=20`)
//     .then(res => console.log(res.rows.length))
// knex('emp').where('deptno', 10).orWhereNotNull('comm').orWhere((builder) => {
//     builder.where('sal', '<=', 200).andWhere('deptno', 20)
// }).then(res => console.log(res.length))

// knex.raw(`select sal as sallary, comm as commission from emp`)
//     .then(res => console.log(res.rows))
// knex('emp').select('sal as sallary', 'comm as commission')
//     .then(res => console.log(res))


// knex.raw(`select * from (select emp.sal as salary from emp) x where salary < 5000`).then(res => console.log(res.rows))


// knex.raw(`select ename || ' work as a ' || job as msg from emp where deptno=10`).then(res => console.log(res.rows))

// knex.raw(`select * from emp limit 5`).then(res => console.log(res.rows))
// knex.select('*').from('emp').limit(5).then(res => console.log(res))

// knex.raw(`select ename, job from emp order by random() limit 5`).then(res => console.log(res.rows))

// knex.raw(`select ename, coalesce(comm, 0) from emp where comm is null or comm=0`).then(res => console.log(res.rows))

// knex.raw(`select deptno, ename, job, sal from emp order by deptno, sal desc`).then(res => console.log(res.rows))

// knex.raw(`select * from emp order by comm`).then(res => console.log(res.rows))