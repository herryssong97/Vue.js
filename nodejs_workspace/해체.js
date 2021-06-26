let {id, country}={"id":'user01', "country":"korea"};
//JSON형태로 정보를 저장할 때 키값은 "" 로 반드시 
console.log( id, country);

let {name, email, phone="010-0000-0001"}={"name":"서윤석","email":"kkk@test.com"};

console.log( name, email, phone );


function printProfile({name, nationality="none"}={name:"anonymous"})
{
    console.log(name);
    console.log(nationality);
}

printProfile();
printProfile({name:"김성훈"});
printProfile({name:"Tom", nationality:"미국"});
