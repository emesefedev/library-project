const _books = new Map()
let id = 1;

const library = () => document.getElementById("library")
const newBookButton = () => document.getElementById("new-book-button")
const newBookModal = () => document.getElementById("new-book-modal")

const newBookForm = () => document.forms[0]

const cancelButton = () => document.getElementById("cancel-button")

class Book {
  constructor (title, author, pages, read = false)  {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.id = id++
  }
}

function createNewBookFromForm(bookInfo) {
  const newBook = new Book(bookInfo.title, bookInfo.author, bookInfo.pages, bookInfo.read)
  addBookToLibrary(newBook)
}

function clearForm(form) {
  form.reset()
}

function addBookToLibrary(newBook) {
  _books.set(newBook.id, newBook)

  rerenderLibrary()
}

function deleteBookFromLibrary(bookId) {
  _books.delete(bookId)


  rerenderLibrary()
}

function renderBook(book) {
  const bookCard = document.createElement("div")
  bookCard.classList.add("book-card")

  setCardTitle(bookCard, book)
  setCardAuthor(bookCard, book)
  setCardPages(bookCard, book)

  setReadToggle(bookCard, book)
  
  setDeleteBookButton(bookCard, book)

  library().appendChild(bookCard);
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

function setReadToggle(bookCard, book) {
  const readToggle = document.createElement("div")
  readToggle.classList.add("flex", "align-center", "gap-10")

  const readLabel = document.createElement("label")
  readLabel.htmlFor = `read-${book.id}`
  readLabel.textContent = "Read"
  readToggle.appendChild(readLabel);

  const readInput = document.createElement("input")
  readInput.type = "checkbox"
  readInput.checked = book.read
  readInput.id = `read-${book.id}`
  readInput.name = `read-${book.id}`
  readToggle.appendChild(readInput);

  bookCard.appendChild(readToggle);
}

function setDeleteBookButton(bookCard, book) {
  const deleteBookButton = document.createElement("button")
  deleteBookButton.classList.add("card-button")
  deleteBookButton.textContent = "Delete Book"
  bookCard.appendChild(deleteBookButton);

  deleteBookButton.addEventListener("click", () => {
    deleteBookFromLibrary(book.id)
  })
}

function cleanLibrary() {
  while (library().firstChild) {
    library().removeChild(library().lastChild);
  }
}

function rerenderLibrary() {
  cleanLibrary()

  for (const [id, book] of _books) { 
    renderBook(book)
  }

  if (library().firstChild == null) {
    const noBooksText = document.createElement("p")
    noBooksText.classList.add("text-dark-green")
    noBooksText.textContent = "No books in library"
    library().appendChild(noBooksText);
  }
}

window.addEventListener("load", () => {

  newBookButton().addEventListener("click", () => {
    clearForm(newBookForm())
    newBookModal().showModal()
  })

  newBookForm().addEventListener('submit', (event) => {
    
    event.preventDefault()
    event.stopPropagation()
    newBookModal().close()

    let formData = new FormData(event.target)
    
    let bookInfo = {
        title: formData.get("titleInput").toString(),
        author: formData.get("authorInput").toString(),
        pages: formData.get("pagesInput"),
        read: formData.get("readInput") 
    }
    
    createNewBookFromForm(bookInfo)
})

  cancelButton().addEventListener("click", (event) => {
    newBookModal().close()
  })

  book1 = new Book("Los siete maridos de Evelyn Hugo", "Taylor Jenkins Reid", 384, true)
  book2 = new Book("Entre silencios", "Camila Silva", 276, true)
  book3 = new Book("Running Close to the Wind", "Alexandra Rowland", 448, false)
  
  addBookToLibrary(book1)
  addBookToLibrary(book2)
  addBookToLibrary(book3)
})