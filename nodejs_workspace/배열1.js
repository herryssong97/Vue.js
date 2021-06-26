let num = new Array();

//데이터 추가 
num.push("설렁탕");
num.push("곰탕");
num.push("육개장");
num.push("갈비탕");
num.push("해장국");

for(i=0; i<num.length; i++)
{
    console.log( num[i]);
}

//인덱스-in
for(let i in num)
{
    console.log(i, " ", num[i]);
}

//객체 반환 - of연산자
for(let temp of num)
{
    console.log("객체 : ", temp);
}