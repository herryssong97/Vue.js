let a1= [1,2,3,4,5,6,7,8,9,10];
let b1=[]; 

function myfunc(x)
{
    return x*x;
}

for(i=0; i<a1.length; i++)
{
    b1.push(myfunc(a1[i]));
}
console.log( b1);

//map 함수가 전달된 배열의 요소를 하나 전달받는 익명함수가 필요 
b1 = a1.map( m => m*m );
console.log( b1);

b1 = a1.filter( m=> m>50);
console.log( b1);

//짝수만
b1 = a1.filter( m=> m%2==0);
console.log( b1);

b1 = a1.filter( m=>{ 
    if(m%2==0) 
        return true;
    else
        return false;
});
console.log( b1);

var sum = (x=10,y=20,z=30)=> { return x+y+z; };

var sum = (x=10,y=20,z=30)=> x+y+z;
console.log( sum() );
console.log( sum(1) );
console.log( sum(1,2) );
console.log( sum(1,2,3) );

