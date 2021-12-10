"use strict"

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

// const jonh = {
//     health: 100
// }; 


// jonh.__proto__ = soldier;//установили прототипом джона солдата
// Object.setPrototypeOf(jonh, soldier); // первый аргумент пишется которому нужно назначить прототип,
// через запятую оюъект прототип которого устанавливаем
// Object.setPrototypeOf(jonh, soldier); 

//cоздаю новый объект jonh, который будет прототипно наследоваться от soldier
const jonh = Object.create(soldier);

jonh.sayHello();
