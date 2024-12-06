import mysql from "mysql2";

//establishing Database of mysql
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nevin12345",
  database: "blog",
});
