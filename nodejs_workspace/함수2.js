//자바스크립트는 오버로딩을 지원하지 않는다. 
//같은 파일에 같은 이름을 갖는 함수를 만들 수 없다
//대신에 기본값을 사용해서 오버로딩과 유사한 효과를 줄수있다

function add(a=10,b=20,c=30)
{
    return a+b+c;
}

console.log( add() ); 
console.log( add(1) ); 
console.log( add(1,2) ); 
console.log( add(1,2,3) ); 

function display(a, ...rest)
{
    console.log( a );
    for(temp of rest)
    {
        console.log(temp);
    }
}

display(1,2,3);
display(1,2,3,4,5);

function DoubleFunction(x)
{
    return x*x;
}

var myfunc = function (x,y) { return x+y; }
console.log(myfunc(3,4));

//콜백함수 만들때 많이 사용한다. 
myfunc = (x,y)=>{return x+y; }
console.log(myfunc(3,4));



//스칼라 연산 - 데이터 한개씩=> 벡터연산(배열)
//x = [1,2,3,4,5,6,7,8,9,10];
//y = 2*x + 3; 


