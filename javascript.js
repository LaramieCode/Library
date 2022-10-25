let libraryContent = document.querySelector(".libraryContent");
const addBookBtn = document.querySelector(".addBook");
const bookFormContainer = document.querySelector(".formContainer")
const submitBook = document.querySelector("#submitBook")

let myLibrary = [];

function Book(title, author, pages, read, onPage) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.onPage = onPage;
};

function addBookToLibrary(title, author, pages, read, onPage) {
    tempBook = new Book(title, author, pages, read, onPage);
    myLibrary.push(tempBook)
};

function addBookToPage() {

    myLibrary.forEach((book) => {

        if (book.onPage === false) {

            book.onPage = true

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
            newCard.appendChild(cardDelete)

            cardDelete.classList.add("delete")

            cardTitle.textContent = book.title;
            cardAuthor.textContent = `By: ${book.author}`;
            cardPages.textContent = `${book.pages} Pages`;
            if (book.read === true) {
                cardRead.textContent = "Have Read"
                newCard.classList.add("bookHasRead")
            }
            if (book.read === false) {
                cardRead.textContent = "Have not Read"
                newCard.classList.add("bookHasNotRead")
            }
            cardDelete.textContent = "Remove"

            cardDelete.addEventListener("click", function(){
                removeBookFromLibrary(book);
            });

            if (book.read === false) {
                cardNowRead = document.createElement("button");
                newCard.appendChild(cardNowRead);
                cardNowRead.classList.add("readToggle")
                cardNowRead.textContent = "Read yet?"

                cardNowRead.addEventListener("click", () => {
                    console.log("hey")
                    newCard.classList.remove("bookHasNotRead")
                    newCard.classList.add("bookHasRead")

                    cardNowRead.classList.add("dontDisplay")
                })
            }
        }   
    });
};

function removeBookFromLibrary(book) {
    let match = myLibrary.findIndex( (value) => {
        return value === book
    })
    myLibrary.splice(match, 1)

    removeBookFromPage(match)
}

function removeBookFromPage(match) {
    pageBooks = document.querySelectorAll(".bookCard")
    pageBooks[match].remove()
}

addBookBtn.addEventListener("click", function() {
    bookFormContainer.classList.toggle("dontDisplay")
    libraryContent.classList.toggle("dontDisplay")
});

submitBook.addEventListener("click", function() {
    let formData = document.querySelectorAll(".addBookForm input")

    if (formData[3].checked) {addBookToLibrary(formData[0].value, formData[1].value, formData[2].value, true, false)}
    if (formData[4].checked) {addBookToLibrary(formData[0].value, formData[1].value, formData[2].value, false, false)}

    addBookToPage()
});

addBookToLibrary("The Hobbit", "J.R.R Tolkien", "296", true, false);
addBookToLibrary("The Cat in the Hat", "Dr. Seuss", "61", false, false)

addBookToPage()