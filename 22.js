"use strict"

//Передача по ссылке или по значению, Spread оператор

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy =obj;// эта запись передает ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);
//{ a: 10, b: 1 }
//{ a: 10, b: 1 }
//Когда работаем с объектами, идет передача значения по ссылке, в 10 строке мы с вами не скопировали объект, мы передаем значение по ссылке
//модифицируя копию мы модифицируем первоначальный объект

//Копии объектов


//функция при помощи цикла создаст новый объект уже перебирая старые свойства которые были в объекте
function copy(mainObj) {
    //создаем копию 
    let objCopy = {};

    //запускаем функцию for in
    let key;
    //у нас есть ключи в 
    for (key in mainObj) {
    //во внутрь пустого объекта помещаем новое  свойство через [], дальше делаем копию из нашего объекта
        objCopy[key] = mainObj[key];
    }

    //возвращаем objCopy наружу 
    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4,
    }
};

//возспользуемся функцией copy она примет в себя объект numbers  и  вернет нам новый объект который будет копией
//запускаем функцию во внутрь передаем numbers 
const newNumbers = copy(numbers);


newNumbers.a = 10;
numbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);


//позволяет соеденить несколько объектов
const add = {
    d:17,
    e: 20
};
 
//первый объект это будет объект в которых мы хотим поместить, второй объект который помещаем
console.log(Object.assign(numbers,add));

//создали независимую структуру

console.log(Object.assign( {},add));


const  oldArray = ['a', 'b', 'c'];
const newAarray = oldArray.slice(); //slice медод копирования массива
console.log(newAarray);
console.log(oldArray);

//Spread оператор оператор разворота ...

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