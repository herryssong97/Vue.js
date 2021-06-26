var http=require("http");
var fs = require("fs");
var ejs = require("ejs");  //npm install ejs

http.createServer(function(req, res){
    //ejs 페이지를 불러와서 html 페이지를 만든다 

    fs.readFile("./html/test2.html", "utf8", function(error, data)
    {
        res.writeHead(200, {'Conent-type':'text/html'});
        res.end( ejs.render(data, 
                {   
                    "name":"홍길동", 
                    "address":"서울시",
                    "fruits":['사과', '배', '포도', '참외', '수박'],
                    "product":[
                        {"product_name":"갤럭시 s12", "product_price":1200000},
                        {"product_name":"lg oled tv", "product_price":4000000},
                        {"product_name":"lg 드럼세탁기", "product_price":2000000},
                        {"product_name":"TV", "product_price":400000},
                        {"product_name":"아이폰", "product_price":700000}                        
                    ],
                    "board":[
                        {"title":"제목1","contents":"내용1"},
                        {"title":"제목2","contents":"내용2"},
                        {"title":"제목3","contents":"내용3"}
                    ]
                }
        ));
        //ejs.render - ejs기반 문서를 html 형태로 전환시켜 반환한다 
    });
}).listen(4000, function(){
    console.log("Server Start");
})
