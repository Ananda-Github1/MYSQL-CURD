const mysql = require("mysql2/promise");

const mysqlpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ananda@12345',
    database: 'students_db'
});

module.exports = mysqlpool;