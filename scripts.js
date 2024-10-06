// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');

//     if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// // rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// // detectPersonalLevel()

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB();

// function writeYourGenres(array) {
//   for (let i = 0; i < 3; i++) {
//     array[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//   }
// }

// console.log(150 % 60);

// Мой вариант
// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <=5; i++){
//   for(let j=lines - i;j>0;j--){
//     result += ' ';
//   }
//   for(let k=0; k< (2*i +1); k++){
//     result += '*';
//   }
//   result +='\n';
// }

// Вариант учителя
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// console.log(result);

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function () {
//     return currentSum;
//   };

//   return f;
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15

// function add(n) {
//   let currSum = n;
//   function sum(b) {
//     currSum += b;
//     return sum;
//   }
//   sum.valueOf = function () {
//     return currSum;
//   };
//   return sum;
// }

// function add(n) {
//   const func = (x) => add(n + x);
//   func.valueOf = () => n;
//   return func;
// }

const add = (n) => Object.assign((i) => add(i + n), { valueOf: () => n });

// alert(add(1)(2)(3));
// alert(add(1)(2)(3)(4));
// alert(add(1)(2)(3)(4)(5));

// alert(add(1));

let addTwo = add(2);
console.log(addTwo);
console.log(addTwo + 5);
console.log(addTwo(3));
console.log(addTwo(3)(5));

const a = add(1)(2);
const b = add(3)(4);
alert(a(b));
console.log(a(b));
