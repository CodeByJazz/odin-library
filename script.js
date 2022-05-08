// let userBooks = prompt("Enter your favorite books.");

// Declare empty array for library
let myLibrary = [];

//Object Constructor
function Book(Title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Read = read;
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

//Function to display library array to cards
function displayBooksOnPage() {
  const books = document.querySelector(".books");

  //Loop over the library array and display to the cards
  myLibrary.forEach((myLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

//Calling function and adding data manually
// addBookToLibrary("Lord of the Flies", "William Golding", "224 Pages", "Read");

// addBookToLibrary(
//   "Night Sky With Exit Wounds",
//   "Ocean Vuong",
//   "89 Pages",
//   "Unread"
// );
// addBookToLibrary("Lord of the Flies", "William Golding", "224 Pages", "Read");

// addBookToLibrary(
//   "Night Sky With Exit Wounds",
//   "Ocean Vuong",
//   "89 Pages",
//   "Unread"
// );
// addBookToLibrary("Lord of the Flies", "William Golding", "224 Pages", "Read");

// addBookToLibrary(
//   "Night Sky With Exit Wounds",
//   "Ocean Vuong",
//   "89 Pages",
//   "Unread"
// );

// console.log("End of Array", myLibrary);
// displayBooksOnPage();
