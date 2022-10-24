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

addBookToLibrary("Hobbit", "J.R.R Tolkien", 296, false);