// Declare empty array for library
let myLibrary = [];

//Class Object
class Book {
  constructor(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
  }
}

// Function for adding a new book to the array
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooksOnPage();
}

//Function to display library array to cards
function displayBooksOnPage() {
  const books = document.querySelector(".books");

  //Remove all previously displayed cards before looping the array
  const removeDivs = document.querySelectorAll(".card");
  console.log("show me the mode count of current card divs...", removeDivs);
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  //Loop over the library array and display to the cards
  let index = 0;
  myLibrary.forEach((myLibrarys) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    //Create remove book button and add class attribute for each array card
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove From Library";
    console.log(
      "show me my current array object inside of foreach...",
      myLibrary
    );

    //Link the data attribute of the remove button to the array and card
    removeBookButton.dataset.linkedArray = index;
    console.log(
      "show me the dataset link back to the array...",
      removeBookButton.dataset.linkedArray
    );
    card.appendChild(removeBookButton);

    //Add event listener/remove array item from array and card from parent div via data link
    removeBookButton.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
      console.log(
        "attempting to remove array item via data attribute...",
        parseInt(retrieveBookToRemove)
      );
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBooksOnPage();
    }
    //Create read status button and add class attribute for each card array
    const readStatusButton = document.createElement("button");
    readStatusButton.classList.add("read-status-button");
    readStatusButton.textContent = "Toggle Read Status";

    //Link the data attribute of the toggle read button to the array and card
    readStatusButton.dataset.linkedArray = index;
    console.log(
      "show me the dataset link back to the array FOR READ STATUS BUTTON...",
      readStatusButton.dataset.linkedArray
    );
    card.appendChild(readStatusButton);

    //Add event listener/toggle logic for array objects prototype for read status change
    readStatusButton.addEventListener("click", toggleReadStatus);

    function toggleReadStatus() {
      let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
      Book.prototype = Object.create(Book.prototype);
      const toggleBook = new Book();
      console.log(
        "What is the toggle initial value?...",
        myLibrary[parseInt(retrieveBookToToggle)].Read
      );

      //Run check to see what read value is present to toggle from
      if (myLibrary[parseInt(retrieveBookToToggle)].Read == "Yes") {
        toggleBook.Read = "No";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      } else if (myLibrary[parseInt(retrieveBookToToggle)].Read == "No") {
        toggleBook.Read = "Yes";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      }
      displayBooksOnPage();
    }

    //Loop over the object keys and values and display each card
    for (let key in myLibrarys) {
      console.log(`${key}: ${myLibrarys[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    }
    index++;
  });
}

//Add event listener/display form to add a new book to library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
  document.getElementById("add-book-form").style.display = "";
}

//Add event listener/add input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

//Transform data to variables for intake
function intakeFormData() {
  let title = document.getElementById("Title").value;
  let author = document.getElementById("Author").value;
  let pages = document.getElementById("Pages").value;
  let read = document.getElementById("Read").value;

  //break out if form is incomplete
  if (title == "" || author == "" || pages == "" || read == "") {
    return;
  }
  //Call function to input the book data to array
  addBookToLibrary(title, author, pages, read);

  //Reset the form after successful submission
  document.getElementById("add-book").reset();
}

const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book").reset();
}
