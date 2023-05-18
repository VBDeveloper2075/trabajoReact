// var mysql = require ('mysql');
// var util= require ('util');

// var pool= mysql.createPool({
//   connectionLimit: 10;
//   host:process.env.MYSQL_HOST,
//   host:process.env.MYSQL_USER,
//   password:process.env.MYSQL_PASSWORD,
//   database:process.env.MYSQL_DB_NAME
// })

// pool.query=util.promisify(pool.query);

// module.exports=pool;

// // ejecucion de consultas
// // select

// var pool=require('./bd');

// pool.query("select ✭ from alumnos").then(function(resultados){
//   console.log(resultados);
// });

// // insert

// var pool= require('./bd');

// var obj={
//   nombre='Juan',
//   apellido='Lopez'
// }

// pool.query("insert into alumnos set ?", [obj]).then(function(resultados){
//   console.log(resultados);
// });

// // update

// var pool= require('./bd');

// var id=1;
// var obj={
//   nombre='Pablo',
//   apellido='gomez'
// }

// pool.query("update alumnos set ? where id=?", [obj, id]).then(function(resultados){
//   console.log(resultados);
// });

// // delete

// var pool= require('./bd');

// var id=1;

// pool.query("delete from alumnos where id = ?", [id]).then(function(resultados){
//   console.log(resultados);
// });