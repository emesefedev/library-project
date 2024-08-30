class Book {
    constructor(
        id,
        name,
        author,
        read=false
    ){
        this.id = id

    }

    nameAndAuthor() {
        return `${this.name} by ${this.author}`
    }
}


function newBook(params) {
    return {
        id: id++,
        title,
        author,
        read: false
    }
}


const myForm = document.forms[0]

myForm.addEventListener('submit', (event) => {
    
    event.preventDefault()
    event.stopPropagation()

    let formData = new FormData(event.target)
    
    let dict = {

        title: formData.get('titleInput').toString(),
        author: formData.get('authorInput').toString(),
        pages: formData.get('pagesInput').toString()
        
    }
    for (const [key, value] of formData.entries()) {
        dict[key] = value.toString()
    }
    
    

})


