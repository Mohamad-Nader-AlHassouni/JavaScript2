"use strict";

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];
//creat array of images url
const images = [
  "https://img1.od-cdn.com/ImageType-400/4575-1/85E/A00/CF/%7B85EA00CF-F096-4068-8876-960C1075ED20%7DImg400.jpg",
  "https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/0/1/4/1001004011834109.jpg",
  "https://servimg.eyrolles.com/static/media/6224/9780201616224_internet_h1400.jpg"
];
const body = document.querySelector("body");
//creat ul and style it
const bookList = document.createElement("ul");
bookList.style =
  "list-style: none; display: flex; justifyContent: space-around";
body.appendChild(bookList);
//Iterate through the array of books
for (let i = 0; i < books.length; i++) {
  const book = document.createElement("li");
  book.style =
    "width: calc(25% - 51px); margin: 15px; padding: 10px; min-width: 350px;";
  bookList.appendChild(book);

  const bookInfo = document.createTextNode(
    books[i].title + " - " + books[i].author
  );
  book.appendChild(bookInfo);
  //add the images
  const bookImg = document.createElement("img");
  bookImg.src = images[i];
  bookImg.style = "width: 200px; height:250px;";
  book.appendChild(bookImg);

  if (books[i].alreadyRead) {
    book.style.backgroundColor = "green";
  } else {
    book.style.backgroundColor = "red";
  }
}
document.body.appendChild(bookList);
