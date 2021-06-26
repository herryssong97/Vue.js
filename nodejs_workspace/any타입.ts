let x : any;

x = 123;
console.log(x);
x = "Hello any";
console.log(x);
x = `any 타입은 타사에서 만든 라이브러리를 가져다 쓸때 
정확한 타입을 알 수 없을때 유용하다`;
console.log(x);

x = {"title":"아파치 스파크 입문", "price":25000};
console.log( x );
console.log( x.title, x["title"], x.price, x["price"] );
