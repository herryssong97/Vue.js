//json 으로 반환하기
var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit:10,
  host:'localhost',
  user:'user01',
  password:'1234',
  database:'mydb',
  port:5306

});
/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log("dddddd");
  res.redirect('/guestbook/list/1');
});

router.get('/list/:page', function(req, res, next) {
  console.log("guestbook3");
  pool.getConnection(function(err, connection){
    var sql ="select id, title, writer, contents, date_format(wdate, '%Y-%m-%d') wdate ";
    sql = sql + " from guestbook limit 0, 10 "; //5개만 가져온다 
    connection.query(sql, function(err, rows)
    {
      if(err) console.log("err : " +err);
        //쿼리 실행수 rows 에 디이터 담아온다, 클라이언트에게 rows 보내준다 
      //test= JSON.stringify( {data:rows})
      res.send( {data:rows}); 
      //"rows 라는 이름으로 디비에서 받아온 전체 행을 클라이언트로 보낸다 "
      connection.release();    
    });

  });
});

router.get('/insert', function(req, res, next) {
  //res.send("dd");
  res.render('./guestbook/insert.ejs');

});

router.post('/insert', function(req, res, next) {
  var body = req.body;
  var title = body.title;
  var contents = body.contents;
  var writer = body.writer
  var datas = [title, writer, contents]; 

  var sql = "insert into guestbook(title, writer, contents, wdate) ";
  sql = sql + " values(?,?,?,now()) ";

  pool.getConnection(function(err, connection ){
    connection.query(sql,datas, function(err, rows){
      if(err) console.log("err: " + err);
      res.redirect("/guestbook3"); //페이지 이동하기  
	    connection.release(); //디비 저장 다 되면 연결 객체를 반환한다 
    ;})  
  });
});

router.get('/view/:id', function(req, res, next) {
  //파라미터값 사용하기 
  console.log("view : " + req.params.id);
  var id = req.params.id; 
  pool.getConnection(function(err, connection){
    if(err) console.log(err);

    var sql ="select id, title, date_format(wdate, '%Y-%m-%d') wdate ";
    sql = sql + ", contents from guestbook where id="+id; //5개만 가져온다 
    console.log("쿼리 : " + sql);

    connection.query(sql, function(err, rows)
    {
      if(err) console.log("err : " +err );
      console.log(rows);
	    //쿼리 실행수 rows 에 디이터 담아온다, 클라이언트에게 rows 보내준다 
      res.render('./guestbook/view.ejs', {rows:rows}); 
      //"rows 라는 이름으로 디비에서 받아온 전체 행을 클라이언트로 보낸다 "
      connection.release();    
    });

  });
});

module.exports = router;

/*
var accountStr = '{"name":"Jedi", "members":["Yoda", "Obi Wan"], "number":34512, "location":"A galaxy far, far away"}';
var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);       //Jedi
console.log(accountObj.members);    //["Yoda", "Obi Wan"]

var accountObj = {
    name: "Baggins",
    number: 10645,
    members: ["Frodo, Bilbo"],
    location: "Shire"
};
var accountStr = JSON.stringify(accountObj);
console.log(accountStr);    // {"name":"Baggins","number":10645,"members":["Frodo,Bilbo"],"location":"Shire"}
*/
