//
// let nam = document.getElementById("name")
// console.log(nam);
// //достаем форму по имени
// console.log(document.forms['some']);
// //достаем элементы
// let form = document.forms['some']
// console.log(form.elements);
// //все значения в форме с одинаковым именем
// let f = document.forms['some']
// console.log(form.elements['qq']);
// //количество значение в форме
// let fd = document.forms['someName']
// console.log(form.elements.length);

// let qe = document.forms['someName']
// let wq = form.elements["qq"]
// console.log(wq.value = "ee");
// console.log(wq.name = "ww");
// console.log(wq.disabled = true);

// //task
// let res = document.forms['test']
// let currenElement = res.elements["submit"]
// let fuu = (event) => {
//     event.preventDefault();
//     res.reset()
//     currenElement.disabled = true
// }
// res.addEventListener("submit", fuu )

// // let re = () => {
// //     currenElement.disabled = true
// //     res.reset()
// // }
// // currenElement.addEventListener("click", re)

// //task
// let test = document.forms["test1"]
// let foo = (event) => {
//     event.preventDefault();
//     let current = test.elements['text11']
//     current.value = 'sdfsd'
    
// }
// test.addEventListener("submit", foo)

// //task
// let tes = document.forms["test2"]
// let check = document.querySelectorAll(".check")
// console.log(check);
// let btn = document.querySelector('btn')

// let fu = (event) => {
//     event.preventDefault()
//     for (let index = 0; index < check.length; index++) {
//         const element = check[index];
//         console.log(element.name + ' ' + element.checked);
//     }
//     let input = document.querySelector(".rere")
//     console.log(input.value);

// }
// tes.addEventListener("submit", fu)