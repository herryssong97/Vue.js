var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("Member Login");
  //index.jade ���� �ҷ��ͼ� rendering�� �϶� 
});

module.exports = router;


// http://localhost:3000/member 