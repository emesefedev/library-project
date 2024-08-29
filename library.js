const books = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(newBook) {
  books.push(newBook)
}

function displayBook(book, idx) {
  const bookCard = document.createElement("div")
  bookCard.classList.add("book-card")

  setCardTitle(bookCard, book)
  setCardAuthor(bookCard, book)
  setCardPages(bookCard, book)

  setReadToggle(bookCard, book, idx)
  
  setDeleteBookButton(bookCard)

  library.appendChild(bookCard);
}

function setCardTitle(bookCard, book) {
  const cardTitle = document.createElement("p")
  cardTitle.classList.add("card-title")
  cardTitle.textContent = book.title
  bookCard.appendChild(cardTitle);
}

function setCardAuthor(bookCard, book) {
  const cardAuthor = document.createElement("p")
  cardAuthor.classList.add("card-author")
  cardAuthor.textContent = book.author
  bookCard.appendChild(cardAuthor);
}

function setCardPages(bookCard, book) {
  const cardPages = document.createElement("p")
  cardPages.classList.add("card-pages")
  cardPages.textContent = `${book.pages} pages`
  bookCard.appendChild(cardPages);
}

function setReadToggle(bookCard, book, idx) {
  const readToggle = document.createElement("div")
  readToggle.classList.add("flex", "align-center", "gap-10")

  const readLabel = document.createElement("label")
  readLabel.htmlFor = `read-${idx}`
  readLabel.textContent = "Read"
  readToggle.appendChild(readLabel);

  const readInput = document.createElement("input")
  readInput.type = "checkbox"
  readInput.checked = book.read
  readInput.id = `read-${idx}`
  readInput.name = `read-${idx}`
  readToggle.appendChild(readInput);

  bookCard.appendChild(readToggle);
}

function setDeleteBookButton(bookCard) {
  const deleteBookButton = document.createElement("button")
  deleteBookButton.classList.add("card-button")
  deleteBookButton.textContent = "Delete Book"
  bookCard.appendChild(deleteBookButton);
}

function updateLibrary() {
  for (let i = 0; i < books.length; i++) {
    displayBook(books[i], i)
  }
}

window.addEventListener("load", () => {
  book1 = new Book("Los siete maridos de Evelyn Hugo", "Taylor Jenkins Reid", 384, true)
  book2 = new Book("Entre silencios", "Camila Silva", 276, true)
  book3 = new Book("Running Close to the Wind", "Alexandra Rowland", 448, false)
  
  addBookToLibrary(book1)
  addBookToLibrary(book2)
  addBookToLibrary(book3)

  const library = document.querySelector("#library")
  updateLibrary()
  
})


