"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border:'black',
        bg: 'red'
    }
}; 

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойсиво ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
        } else {
            console.log(`Свойсиво ${key} имеет значение ${options[key]}`);
            counter++;
        }
    }
   
console.log(counter);