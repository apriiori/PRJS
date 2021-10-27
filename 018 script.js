/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// объявляем глобальную переменнную numberOfFilms. 
let numberOfFilms;

//создаем функцию start. В цикле проверяем numberOfFilms на то что она будет пустой строкой или пока наш польщователь отменяет действие 
//null или нам надо проверить что пользователь ввел число.
// isNaN метот  который принимает во внутрь себя аргумент проверяет его и если внутри не чисто то он возвращает правду 
//цикл будет выполняться пока условие будет правдивым
function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}
 // вызов функции
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
}; 




function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies [a] = b;
    
    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        console.log(personalMovieDB);
        console.log('done');
    } else{
        console.log('error');
        i--;
    }    
    }
}

rememberMyFilms();


    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
         }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
                console.log("Вы классический зритель");
           }  else if (personalMovieDB.count >= 30 ) {
                console.log("Вы киноман");
           }else {
            console.log("Ошибка");
           }

    }

// detectPersonalLevel();




// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

//прописываем аргумент в функцию,  шаблон поведения
function showMyDB(hidden) {
//если наша база данных не скрыта (!hidden/ nothidden)  то мы её показываем. 
    if (!hidden){
            console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat); 

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres


function writeYourGenres() {
    for (let i = 1;i <= 3; i++) {
        //для того что бы ипользовать переменную i используем вместо кавычек бектики ``  
        const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        //для того что бы вопрос задавался три раза мы от i отнимает 1 что бы первоначальное значение было 0 
        personalMovieDB.genres [i - 1] = genres; 

    }
}

writeYourGenres();
console.log(personalMovieDB);