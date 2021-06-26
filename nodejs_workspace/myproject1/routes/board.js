var express = require('express');
var router = express.Router();

/* board.js list, view, write, insert */
data = [
  {id:0, title:"제목1", writer:"홍길동1", contents:"내용1"},
  {id:1, title:"제목2", writer:"홍길동2", contents:"내용2"},
  {id:2, title:"제목3", writer:"홍길동3", contents:"내용3"},
  {id:3, title:"제목4", writer:"홍길동4", contents:"내용4"},
  {id:4, title:"제목5", writer:"홍길동5", contents:"내용5"},
  {id:5, title:"제목6", writer:"홍길동6", contents:"내용6"},
  {id:6, title:"제목7", writer:"홍길동7", contents:"내용7"},
  {id:7, title:"제목8", writer:"홍길동8", contents:"내용8"},
  {id:8, title:"제목9", writer:"홍길동9", contents:"내용9"},
  {id:9, title:"제목10", writer:"홍길동10", contents:"내용10"}
]

// 라우터 use(get, post다 받고), get, post, put, delete
router.get('/', function(req, res, next) {
  //res.send({data:data, totalCount:data.length});
  res.render('board/list', { dataList: data });
});

var mongoose = require('mongoose')
// var promise = mongoose.connect('mongodb://127.0.0.1/mydb')
var db = mongoose.conection
db.on('error', console.error.bind(console, "connection error"));
db.once('open', ()=>{
  console.log("connect success");
});

router.get("/person", (req, res)=>{
  db.collections('person').find({}).toArray( (err, results)=>{
    
    res.send({person:results});
  })
})


module.exports = router;

