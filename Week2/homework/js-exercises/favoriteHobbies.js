"use strict";

const myHobbies = [
  "Meditation",
  "Reading",
  "Programming",
  "Hanging out with friends",
  "Going to the gym"
];
const body = document.querySelector("body");

const ul = document.createElement("ul");
ul.innerText = "My Hobbies :";

myHobbies.map(function(hobby) {
  const li = document.createElement("li");
  li.textContent = hobby;
  ul.appendChild(li);
});

document.body.appendChild(ul);
