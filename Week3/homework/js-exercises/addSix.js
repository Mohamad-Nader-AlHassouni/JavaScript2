"use strict";

function createBase(base) {
  return closure => {
    return base + closure;
  };
}

const addSix = createBase(6);

console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));
