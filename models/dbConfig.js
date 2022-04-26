 const mysql = require('mysql2');

 const mysqlConnection = mysql.createConnection({
     connectionLimit: 10,
     host: 'localhost',
     database: 'p2-projet',
     user: 'root',
     password: 'H6TULFpi.',
     port: '3306'
 })

 mysqlConnection.connect((err) => {
     if(!err)
     console.log('Database Connected')
     else
     console.log('Problème Error : ' + JSON.stringify(err, undefined, 2));
 })

 module.exports = mysqlConnection;