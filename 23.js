"use strict"


// let str = "some";
// let strObj = new String(str);//создаем новую строку, на основании строчки создаем еще одну строку

//  console.log(typeof(str));//выведем конструкцию с typeof
//  console.log(typeof(strObj));

 // сначала получаем string / object строку потом объект
 // так происходит когда пытаемся использовать какой то метод на строке
 //он обовачивает строку let strObj = new String(str) в какой то объект потом использует какой то метод который есть у этого объекта
 // потом возвращает всё обратно
 
//  console.dir([1, 2, 3]); 


const soldier = {
    health: 400,
    armor: 100,
    sayHello:function() {
        console.log("Hello");
    }
};

const jonh = {
    health:100
};

// jonh.__proto__ = soldier;//установили прототипом джона солдата
// Object.setPrototypeOf(jonh, soldier); // первый аргумент пишется которому нужно назначить прототип,
// через запятую оюъект прототип которого устанавливаем

//cоздаю новый объект jonh, который будет прототипно наследоваться от soldier
const jonh = Object.create(soldier);
// console.log(jonh.armor);
jonh.sayHello();




                           