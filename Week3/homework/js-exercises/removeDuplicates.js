"use strict";

const letters = ["a", "b", "b", "c", "d", "a", "e", "f", "f", "c", "b"];

function removeDuplicates(array) {
  return [...new Set(array)];
}

console.log(removeDuplicates(letters));
