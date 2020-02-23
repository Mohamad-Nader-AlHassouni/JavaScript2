"use strict";

const body = document.querySelector("body");
//Change the body tag's style
document.body.style.fontFamily = "Arial, sans-serif";
//Replace each of the spans with my information
document.getElementById("nickname").innerHTML = "Satanic-Angel";
document.getElementById("fav-food").innerHTML = "Sushi";
document.getElementById("hometown").innerHTML = "Lebanon";
//Iterate through each li and change the class to "list-item"
const list = document.getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
  list[i].className = "list-item";
}
//Add a style tag that sets a rule for .list-item to make the color red
const head = document.querySelector("head");
let style = document.createElement("style");
style.innerHTML = ".list-item {color: red;}";
head.appendChild(style);
//Create a new img element and set its src attribute to a picture of me
const me = document.createElement("img");
me.src = "https://simgbb.com/images/users/av_dWXFov.jpg";
me.style.width = "250px";
document.body.appendChild(me);
