// function Person(name, age) {
//     this.name = name,
//     this.age = age
// }
// Person.prototype.sagName = function(){
//     console.log(this.name);
// }
// Person.prototype.getOlder = function(years){
//     this.age += years
// }


// let person = new Person('re', 5)
// console.log(person);
// let name = new Person()
// console.log(person.sagName());

// console.log(person.getOlder());

/*class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    sayName() {console.log(this.name);}
    getOlder(years) { this.age +=years
    console.log(this.age);
    }
}
let person = new Person('misha', 7)
console.log(person);

console.log(person.sayName());

console.log(person.getOlder(2));



class Car {
    gender = 'male'
    constructor(name, age, color){
        this.name = name
        this.age = age
        this.color = color
    }
    changeColor(newColor) {
        this.color = newColor
        return this.color
    }
}
let ear = new Car('BMW', 2012, 'red')
console.log(ear);

console.log(ear.changeColor('black')); 



//promise
let promise = new Promise((resolve, reject) => {
    resolve('sucess')
})
promise.then(result => console.log(result + " " + 'ok'),
error => console.log('Reject' + error))


  */

export function validateEmail(email) {
    console.log('hello');
}