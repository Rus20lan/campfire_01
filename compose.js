// Вариант 1. Функций может быть сколько угодно и они могут принимать только один начальный аргумент
const compose =
  (...functions) =>
  (x) =>
    functions.reduceRight((result, fun) => fun(result), x);

const add1 = function (a) {
  return a + 1;
};
const addFirst = function (a) {
  return a;
};
const add2 = function (a) {
  return a + 2;
};
console.log(compose(add1, addFirst)(1));
console.log(compose(add2, add1, addFirst)(3));

// Вариант2. Функция может принимает сколько угодно аргументов в начале

const composeWithArgs = (...fns) =>
  fns.reduceRight(
    (res, fun) =>
      (...args) =>
        fun(res(...args))
  );

const addAll3 = function (a, b, c) {
  return a + b + c;
};

console.log(composeWithArgs(add1, addAll3)(1, 2, 3));
console.log(composeWithArgs(add2, add1, addAll3)(1, 2, 3));
