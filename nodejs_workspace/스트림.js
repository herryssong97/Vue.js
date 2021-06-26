var fs=require('fs');
var stream = fs.createReadStream('data.txt');
stream.on('readable', function(){
    var chunk;
    while(chunk=stream.read()){
        console.log('got npm data chunk of %d bytes', chunk.length);
    }
});

stream.once('end', function(){
    console.log('stream ended');
});
