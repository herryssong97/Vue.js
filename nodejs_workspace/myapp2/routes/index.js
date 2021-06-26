var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade', { title: 'Express' });
  //res.send("<a href='\guesbook\'>방명록</a>");
  //index.jade 파일 불러와서 rendering을 하라 

});

module.exports = router;


