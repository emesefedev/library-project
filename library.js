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

window.addEventListener("load", () => {
  console.log("load")

  book1 = new Book("El nombre del viento", "El que no escribe ni aunque lo amenacen", 300, false)
  addBookToLibrary(book1)


  const library = document.querySelector("#library")
  console.log(library)

  const bookCard = document.createElement("div")
  bookCard.classList.add("book-card")

  const cardTitle = document.createElement("p")
  cardTitle.classList.add("card-title")
  cardTitle.textContent = book1.title
  bookCard.appendChild(cardTitle);

  const cardAuthor = document.createElement("p")
  cardAuthor.classList.add("card-author")
  cardAuthor.textContent = book1.author
  bookCard.appendChild(cardAuthor);

  const cardPages = document.createElement("p")
  cardPages.classList.add("card-pages")
  cardPages.textContent = `${book1.pages} pages`
  bookCard.appendChild(cardPages);

  const readToggle = document.createElement("div")
  readToggle.classList.add("flex", "align-center", "gap-10")

  const readLabel = document.createElement("label")
  readLabel.htmlFor = `read-1`
  readLabel.textContent = "Read"
  readToggle.appendChild(readLabel);

  const readInput = document.createElement("input")
  readInput.type = "checkbox"
  readInput.id = `read-1`
  readInput.name = `read-1`
  readToggle.appendChild(readInput);

  bookCard.appendChild(readToggle);

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("card-button")
  deleteButton.textContent = "Delete Book"
  bookCard.appendChild(deleteButton);

  library.appendChild(bookCard);
 

})


