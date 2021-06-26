var express = require('express');
var router = express.Router();
var ejs = require("ejs");
var fs = require("fs");
var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://127.0.0.1/mydb');
 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected successfully');
});

router.get('/list', function (req, res) {
    db.collection('guestbook').find({}).toArray(function(err,results){
		if(err) throw err;
		
		console.log('ddd');
		console.log(  {rows:results} )
		
		fs.readFile("./views/guestbook/list.ejs", "utf-8", function(error, data){
			if(error)
			{
				console.log(error.message);
				res.sendStatus("505");
			}
			else
			{
				
				res.send(ejs.render(data, {rows:results}));
			}
		 });
   });
})


router.get('/view/:guest_id', function (req, res) {
	var guest_id = parseInt(req.params.guest_id);
	console.log("guest_id : " +  guest_id );
    db.collection('guestbook').findOne({'id':guest_id},function(err,results){
		if(err) throw err;
		console.log(results);
		
		fs.readFile("./guestbook/view.ejs", "utf-8", function(error, data){
			if(error)
			{
				console.log(error.message);
				res.sendStatus("505");
			}
			else
			{
				res.send(ejs.render(data, {rows:results}));
			}
		 });
	  
   });
})


router.get("/insert", function(req, res){
    fs.readFile("./guestbook/insert.ejs", "utf8", function(err, data){
        res.send( ejs.render(data));
    })
});


//http://127.0.0.1:4000/delete/1 

router.get("/delete/:guest_id", function(req, res){
   
	
    var id = parseInt(req.params.guest_id);
	console.log('******* ' + id);
	
	var myquery = { id: id };
	db.collection("guestbook").deleteOne(myquery, function(err, obj) {
	if (err) throw err;
		console.log("1 document deleted");
	});
});

/*
db.guestbook.aggregate(
	[
      {
            "$group": 
			{
                "_id": {},
                "maxId": { $max:parseInt('$id')}
            }
       }
    ]
)
*/

router.post("/insert", function(req, res){
    var body = req.body;
	var id = 1;
	 
	db.collection('guestbook').aggregate(
	[
      {
            "$group": 
			{
                "_id": {},
                "maxId": { $max:"$id"}
            }
       }
    ]).toArray(function (err, result) {
        console.log(result[0].maxId);
        //res.json(result);
		id = parseInt(result[0].maxId)+1;
		console.log("id : " + id);

		var myobj = { "id":id, "title":body.title, "contents":body.contents, "writer":body.writer};
		console.log(myobj);

		db.collection("guestbook").insertOne(myobj, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted");
		});
		res.redirect('/guestbook2/list');
	});
});


module.exports = router;
