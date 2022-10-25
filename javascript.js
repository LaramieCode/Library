let libraryContent = document.querySelector(".libraryContent");
const addBookBtn = document.querySelector(".addBook");
const bookFormContainer = document.querySelector(".formContainer")
const submitBook = document.querySelector("#submitBook")

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

    document.querySelectorAll(".bookCard").forEach(function(e) {e.remove()})

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
        cardAuthor.textContent = `By: ${book.author}`;
        cardPages.textContent = `${book.pages} Pages`;
        if (book.read === true) {
            cardRead.textContent = "Have Read"
            newCard.classList.add("bookHasRead")
        }
        if (book.read === false) {
            cardRead.textContent = "Have not Read"
            newCard.classList.add("bookHasRead")
        }        
    });
};

addBookBtn.addEventListener("click", function() {
    bookFormContainer.classList.toggle("dontDisplay")
    libraryContent.classList.toggle("dontDisplay")
});

submitBook.addEventListener("click", function() {
    let formData = document.querySelectorAll(".addBookForm input")

    if (formData[3].checked) {addBookToLibrary(formData[0].value, formData[1].value, formData[2].value, true)}
    if (formData[4].checked) {addBookToLibrary(formData[0].value, formData[1].value, formData[2].value, false)}

    addBookToPage()
});

addBookToLibrary("The Hobbit", "J.R.R Tolkien", "296", true);

addBookToPage()