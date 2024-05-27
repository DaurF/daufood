import mysql from "mysql2/promise";

let pool;

function mysqlConnect() {
  console.log(`host: ${process.env.MYSQL_HOST}`);

  pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
}

export { mysqlConnect, pool };