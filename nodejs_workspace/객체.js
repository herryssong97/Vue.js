//자바스크립트 객체 만들기 - json 기법임 
var car = {type:"Fiat", model:"500", color:"white"};

console.log(car.type);
console.log(car.model);
console.log(car.color);

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.eyeColor);

console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['eyeColor']);

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    //함수 붙이기 
    fullName : function() {
      return this.firstName + " " + this.lastName + " " + this.id;
    }
  };

//함수 호출하기 
console.log( person.fullName() );

