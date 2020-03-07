'usr strict'

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
// i think the output will be '9'
// because x is defined outside of the function,and its value remains the same.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
// i think in this case the output will be { x: 10 }
// because the function here is changing the value of the key inside the object
