// get the client
//const mysql = require('mysql2');
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs'
});

// simple query
connection.query(
    'SELECT * FROM `users` ',
    function (err, results, fields) {
        console.log("check my sql");
        console.log(results); // results contains rows returned by server
        console.log(results[0]);
    }
);

export default connection;