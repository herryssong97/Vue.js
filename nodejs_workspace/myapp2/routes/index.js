var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade', { title: 'Express' });
  //res.send("<a href='\guesbook\'>����</a>");
  //index.jade ���� �ҷ��ͼ� rendering�� �϶� 

});

module.exports = router;


