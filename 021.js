"use strict"

// function copy(mainObj) {
//     let objCopy = {}; // создаем пустой объект 

//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]; // создаем новое свойство через квадратные скобки  и дальше делаем копию из нашего главого объекта 
//     }

// return objCopy; // возвращаем на ружу для взаимодействия
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers); //  

// newNumbers.a = 10; 

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e:20
// };

// console.log(object.assign(numbers, add));

const video = ['youtube', 'video', 'rutube'],
      blogs = ['wordpress', 'lifejornal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // ... - оператор разворота Оператор «spread»

 console.log(internet);


 function log (a, b ,c) {
     console.log(a);
     console.log(b);
     console.log(c);
 }

 const num = [2, 5, 7];

 log (... num);


 const array = ["a", "b"];

 const newAarray = [...array];

 const q = {
     one: 1,
     two: 2
 };

 const nweObj = {...q};