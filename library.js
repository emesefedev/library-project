const library = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(newBook) {
  library.push(newBook)
}

book1 = new Book("El nombre del viento", "El que no escribe", 300, false)
addBookToLibrary(book1)


