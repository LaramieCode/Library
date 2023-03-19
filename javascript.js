const libraryContent = document.querySelector(".libraryContent");
const addBookBtn = document.querySelector(".addBook");
const bookFormContainer = document.querySelector(".formContainer");
const submitBook = document.querySelector("#submitBook");

addBookBtn.addEventListener("click", function () {
  bookFormContainer.classList.toggle("dontDisplay");
  libraryContent.classList.toggle("dontDisplay");
});

submitBook.addEventListener("click", () => {
  let formData = document.querySelectorAll(".addBookForm input");
  let newBook;

  if (formData[3].checked) {
    newBook = new Book(
      formData[0].value,
      formData[1].value,
      formData[2].value,
      true,
      false
    );
  }
  if (formData[4].checked) {
    newBook = new Book(
      formData[0].value,
      formData[1].value,
      formData[2].value,
      false,
      false
    );
  }
  newBook.addBookToLibrary();
  Book.updatePage();
});

class Book {
  static library = [];

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  addBookToLibrary() {
    Book.library.push(this);
  }
  removeBookFromLibrary() {
    let index = this.locateLibraryIndex();
    Book.library.splice(index, 1);
  }
  locateLibraryIndex() {
    for (let i = Book.library.length; i > 0; i--) {
      if (this == Book.library[i - 1]) {
        return i - 1;
      }
    }
  }

  static clearPage() {
    let content = document.querySelectorAll(".bookCard");
    content.forEach((card) => {
      card.remove();
    });
  }

  static updatePage() {
    Book.clearPage();

    Book.library.forEach((book) => {
      let newCard = document.createElement("div");
      libraryContent.appendChild(newCard);
      newCard.classList.add("bookCard");

      let cardTitle = document.createElement("h1");
      let cardAuthor = document.createElement("h2");
      let cardPages = document.createElement("p");
      let cardRead = document.createElement("p");
      let cardDelete = document.createElement("button");

      newCard.appendChild(cardTitle);
      newCard.appendChild(cardAuthor);
      newCard.appendChild(cardPages);
      newCard.appendChild(cardRead);
      newCard.appendChild(cardDelete);

      cardDelete.classList.add("delete");

      cardTitle.textContent = book.title;
      cardAuthor.textContent = `By: ${book.author}`;
      cardPages.textContent = `${book.pages} Pages`;
      if (book.read === true) {
        cardRead.textContent = "Have Read";
        newCard.classList.add("bookHasRead");
      }
      if (book.read === false) {
        cardRead.textContent = "Have not Read";
        newCard.classList.add("bookHasNotRead");
      }
      cardDelete.textContent = "Remove";

      cardDelete.addEventListener("click", function () {
        book.removeBookFromLibrary();
        Book.updatePage();
      });

      if (book.read === false) {
        let cardNowRead = document.createElement("button");
        newCard.appendChild(cardNowRead);
        cardNowRead.classList.add("readToggle");
        cardNowRead.textContent = "Read yet?";

        cardNowRead.addEventListener("click", () => {
          newCard.classList.remove("bookHasNotRead");
          newCard.classList.add("bookHasRead");

          cardNowRead.classList.add("dontDisplay");
          cardRead.textContent = "Have Read";

          console.log(book.read);
          book.read = true;
          console.log(book.read);
        });
      }
    });
  }
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "296", true);
theHobbit.addBookToLibrary();
let cat = new Book("The Cat in the Hat", "Dr. Seuss", "61", false);
cat.addBookToLibrary();
let sherlock = new Book("sherlock", "holmes", "255", true);
sherlock.addBookToLibrary();

Book.updatePage();
