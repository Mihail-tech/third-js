//
// import{validateEmail} from "./index3"
// validateEmail(email);

// import { rejects } from "assert/strict";
// import { resolve } from "node:path";

/*function validatePhone (phone) {
    const regex = /^[+]*[0-9]{8,15}$/i
    return regex.test(phone)
}
console.log(validatePhone('+375293441138'));

function validateCard (card) {
    const regex = /^4[0-9]{12}(?:[0-9]{3})?$/i
    return regex.test(card)
}
console.log(validateCard('2344|5432|5443|2344'));


// найти файл в массиве
let filesArr = ['index.html', 'model.cs', 'akva.php', 'logo.js'];
let regexFrontHmtl = /^.*\.html$/;
let regexFrontJS = /^.*\.js$/;
let frontArr = [];
let backArr = [];
filesArr.forEach(element => {
    if (regexFrontHmtl.test(element) || regexFrontJS.test(element)){
        frontArr.push(element);
    } else {
        backArr.push(element);
    }
});
console.log(frontArr);
console.log(backArr);



//координаты
let x = document.getElementById("btn");

let showCoordinates = () => {
    console.log(event.clientX + '     ' + event.clientY);
}
x.addEventListener("click", showCoordinates);

//скролл страницы
let y = document.getElementById("btn");

let showCoordinate = () => {
    let scrollY = pageYOffset;
    console.log(scrollY);
}
y.addEventListener("click", showCoordinate);

// координаты точки
let z = document.getElementById("btn1");

let showCoordinat = () => {
     scrollTo(100, 900);
}
z.addEventListener("click", showCoordinat);


//
async function newFunc(){
    return 1;
}
console.log(newFunc());
//

async function newFunc() {
    let promise = new Promise((resolve, rejects) => {
        setTimeout(() => resolve(1),1000);
    });
    let result = await promise;
    console.log(result);
    return 1;
}
*/

