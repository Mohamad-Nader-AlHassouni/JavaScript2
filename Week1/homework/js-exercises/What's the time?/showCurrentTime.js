"use strict";
//this will add 0 to the left
function correctTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const body = document.querySelector("body");
let add0 = document.createElement("div");
body.appendChild(add0);

function startTime() {
  let today = new Date();
  let h = correctTime(today.getHours());
  let m = correctTime(today.getMinutes());
  let s = correctTime(today.getSeconds());
  add0.innerHTML = h + ":" + m + ":" + s;
}

window.onload = setInterval(startTime, 1000);
