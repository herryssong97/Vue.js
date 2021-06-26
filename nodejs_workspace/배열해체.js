fruits = ["사과", "한라봉", "키위", "오렌지", "귤", "배"];
var [,,,ff1, ff2, ff3] = fruits;

console.log( ff1);
console.log( ff2);
console.log( ff3);

a = 10;
b = 5;

[a,b] = [b,a];
console.log(a);
console.log(b);

[a,b,c] = [10,20,30];
console.log(a);
console.log(b);
console.log(c);

function test(a,b,c)
{
    return [a*2, b*2, c*2];
}

[x,y,z] = test(1,2,3);
console.log( x );
console.log( y );
console.log( z );

