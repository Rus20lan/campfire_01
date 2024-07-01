const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);

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

console.log(result);
