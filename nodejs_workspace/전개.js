let [first, ...second] = [1,2,3,4,5];
console.log(first);
console.log(second);

function sum(...args)//가변매개변수 - 매개변수 숫자가 정확하지 않을때 사용한다 
{
    s = 0;
    for(i in args)
    {
        s = s + parseInt(args[i]);
    }
    return s; 
}

console.log( sum(1,2,3));
console.log( sum(1,2,3,4,5));
console.log( sum(1,3,5,7,9,11));

