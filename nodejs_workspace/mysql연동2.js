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


 var sql = "insert into guestbook(title, writer, contents, wdate) ";
  sql = sql + " values(?,?,?,now()) ";

 var datas = ['새로운 제목', 'test', 'contents']; 

  pool.getConnection(function(err, connection ){
    connection.query(sql,datas, function(err, rows){
      if(err) console.log("err: " + err);
     
	    connection.release(); //디비 저장 다 되면 연결 객체를 반환한다 
    ;})  
  });


console.log("종료");
