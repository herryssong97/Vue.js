class Student{
    //별도로 변수를 선언할 필요가 없다 
	constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //함수
    output(){
        console.log('이름 : ' + this.name);
        console.log('나이 : ' + this.age);
    }
}

let s1=new Student('kim', 23);
console.log(s1.name);
console.log(s1.age);

let students = [new Student('홍길동', 23), 
                new Student('이미란', 32),
                new Student('정준영', 28)];
students[0].output();
students[1].output();
students[2].output();

for(i=0; i<students.length; i++)
    students[i].output();
    