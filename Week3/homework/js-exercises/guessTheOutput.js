'usr strict'

// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// i think the output will be alert "12"
// because we created 'a' variable using let in the global scope,
// and we overwrote the value of 'a' inside the function x
// after that we have an inner function that return alert(a)
