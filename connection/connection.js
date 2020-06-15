var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'interview14320rishabh'
});

connection.connect(function(err) { 
    if(err){
        console.log("Database is not connected.Please try again later."+err);
        return;
    }
        console.log("Database is connected.");
 });

 module.exports = connection;