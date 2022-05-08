// let userBooks = prompt("Enter your favorite books.");

// Declare empty array for library
let myLibrary = [];

//Object Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `${this.title} by ${this.author} is ${this.pages} and is ${this.read}.`;
  // };
}

// Function for adding a new book to the array

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// const bookOne = new Book(
//   "Lord of the Flies",
//   "William Golding",
//   "224 pages",
//   "read"
// );
// console.log(bookOne.info());
