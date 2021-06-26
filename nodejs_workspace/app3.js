var express = require('express');
var app = express();

app.use(function(request, response){
	var output=[]; //배열선언 
	for(i=1; i<=10; i++){ 
		//배열에 count:1 name:name-1 형식으로 10개의 데이터를 추가한다 
		output.push( {count:i, name:'name-'+i} );
	}

	response.send( output ); //알아서 출력한다 
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
