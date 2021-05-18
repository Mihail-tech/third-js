/*
// __proto__
let car = {
    drive: true,
    walk: false
}
let man = {
    walk: true,
    drive: false
}
car.__proto__= man
 console.log(car.walk );
 console.log(car.drive);
 console.log(car.drive);
console.log(car.walk);

//создание объекта  с помозью конструктора
// function Animal (name, age){
//     this.run = () => alert('run')
//     this.name = name
//     this.age = age
// }
// let dog = new Animal('BomBom', 18)
// console.log(dog);
// //console.log(dog.run()); вызвали метод run

// let cat = new Animal('Чу-Ча', 10)
// console.log(cat);

//prototype
function Animal () {
    this.run = () => alert('run')
}
function Dog () {
    this.bark = () => alert('bark')
}
Dog.prototype= new Animal()
let dog = new Dog()
console.log(dog);

function Cat () {
    this.mey = () => alert('mey')
}
Cat.prototype = new Animal()
let cat = new Cat()
console.log(cat);


function Figura () {
    this.a = 4
    this.b = 8
    this.p = 3.14
    this.r = 2
}

function Box() {
    this.squery = () => this.a * this.b
}
Box.prototype = new Figura()
let box = new Box()
console.log(box.squery());

function Road () {
    this.circle = () => this.p * this.r * 2
}
Road.prototype = new Figura()
let road = new Road ()
console.log(road.circle());

function Some () {
    this.som = () => (this.b + this.p) + (this.r / this.a)
}
Some.prototype = new Figura()
let some = new Some()
console.log(some.som());



const headers = {
    'Content-Type': 'Oplication/json',
    'Acces-Control-Allow-Origin' : '*'
}
let url = 'https://demo-api.it-shatle.by/auth/signIn'
axios.post(url, {
    email: "mihailshpakovskii@gmail.com",
    password:"123456789Q"
}, headers).then(response => console.log(response),
error => console.log('what are you wrote?' + " " + error))

let url1 = 'https://demo-api.it-shatle.by/auth/signup'
axios.post(url1, {
    email: "mihail23@gmail.ru",
  firstName: "Mike",
  lastName: "Shpakovskii",
  address: {
    country: "belarus",
    city: "minsk",
    addressLine1: "slaviskogo",
    addressLine2: "56",
  },
  gender: "male",
  password: "123456789W",
  phone: "375293441138"
}, headers).then(result => console.log(result),
error => console.log('красава чувак ты уже есть' + ", " + error))
*/