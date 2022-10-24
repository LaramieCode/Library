let libraryContent = document.querySelector(".libraryContent");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    tempBook = new Book(title, author, pages, read);
    myLibrary.push(tempBook)
};

function addBookToPage() {
    myLibrary.forEach((book) => {
        newCard = document.createElement("div");
        libraryContent.appendChild(newCard);
        newCard.classList.add("bookCard");

        cardTitle = document.createElement("h1");
        cardAuthor = document.createElement("h2");
        cardPages = document.createElement("p");
        cardRead = document.createElement("p");

        newCard.appendChild(cardTitle);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardPages);
        newCard.appendChild(cardRead);

        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages;
        if (book.read === true) {
            cardRead.textContent = "Read"
            newCard.classList.add("bookHasRead")
        }
        if (book.read === false) {
            cardRead.textContent = "not Read"
            newCard.classList.add("bookHasRead")
        }        
    });
};

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 296, true);

addBookToPage()