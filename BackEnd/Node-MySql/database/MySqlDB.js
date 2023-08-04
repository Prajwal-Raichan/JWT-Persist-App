let mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  password: "admin",
  host: "localhost",
  database: "node_mysql",
});

module.exports = connection;
