"use strict";

const myNumbers = [1, 2, 3, 4];

const evens = myNumbers.filter(function(x) {
  return x % 2 === 0;
});
console.log(evens);

const doubleEvenNumbers = evens.map(function(x) {
  return x * 2;
});
console.log(doubleEvenNumbers);
