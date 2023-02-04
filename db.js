const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysampledb.cuceurst1z3t.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'aA123456',
  database: 'user'
});

module.exports = connection;