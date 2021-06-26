//공통의 모듈 만들기, 모듈의 메서드는 exports. 구문이 있어야 
//외부로 노출되어 사용이 가능하다 모듈내에서 만든 메서드들이 
//exports. 라는 문구가 없으면 이 파일 내부에서만 사용이 가능하다 

exports.abs = function(number)
{
    if(number<0)
        return -number;
    else
        return number;
}

//1~limit 까지의 합계를 구하는 함수 
exports.sigma = function(limit)
{
    var i, sum=0;
    for(i=1; i<=limit; i++)
        sum += i;
    return sum;
}


