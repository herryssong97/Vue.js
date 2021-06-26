var express = require('express');
var router = express.Router();
var mysql = require("mysql"); //npm install mysql 
var pool = mysql.createPool({
  connectionLimit:10,
  host:'localhost',
  user:'user01',
  password:'1234',
  database:'mydb',
  port:3306
});

pool.getConnection(function(err, connection){
    var sql =`select id, title, wdate from guestbook  `; 
    connection.query(sql, function(err, rows)
                    {
                        for(let row of rows)
                        {
                            console.log( row );
                        }
                        connection.release();    
                    });
  });

