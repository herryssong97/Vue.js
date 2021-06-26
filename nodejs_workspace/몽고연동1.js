var mongoose = require('mongoose');

var promise = mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true } );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('****************************************');
    console.log('*******  connected successfully  *******');
	console.log('****************************************');
    //doRead();

	//doView(1);

	doInsert("새로운 글을 써봅시다", "내용도", "글쓴이")
	doRead();
});



function doRead()
{
	//비동기모드 
	db.collection('guestbook').find({}).toArray(function(err,results){
		if(err) throw err;		
		console.log(  {rows:results} )
	});
}



function doView(guest_id)
{
	console.log("guest_id : " +  guest_id );
    db.collection('guestbook').findOne({'id':guest_id},function(err,results){
		if(err) throw err;
		console.log(results);  
    });
}


/*

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

function doInsert(title, contents, writer)
{
	var id = 1;
	//mysql의 그룹화함수 -> 몽고디비 형태로 전환 
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
			console.log( result );
			console.log(result[0]);
			
			id = parseInt(result[0].maxId)+1;
			console.log("id : " + id);

			var myobj = { "id":id, "title":title, "contents":contents, "writer":writer};
			console.log(myobj);

			db.collection("guestbook").insertOne(myobj, function(err, res) {
				if (err) throw err;
				console.log("1 document inserted");
			});
		
	});
}


