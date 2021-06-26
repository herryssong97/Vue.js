let x;
x = ["홍길동", 12];
console.log( x[0], x[1]);

function test(x)
{
    console.log(x[0], x[1]);
}

test(x);
test(["임꺽정", 43, "010-0000-0000"]);

function test2()
{
    return 1,2,3;
}
let a,b,c;
a,b,c = test2();
console.log(a,b,c);

//enum Color{RED, GREEN, BLUE};
