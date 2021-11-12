"use strict";

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
       }, 500);
}

function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log(`Я прошел этот урок!`);
}

learnJs('JavaScript', done); 