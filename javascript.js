let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

let Hobbit = new Book("Hobbit", "J.R.R Tolkien", 296, false);