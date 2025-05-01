const display = document.getElementById("display");
const newBookBtn = document.getElementById("new-book-button")
const dialog = document.getElementById("dialog");
const closeBtn = document.querySelector("dialog button")
const form = document.getElementById("new-book-form")



let library =[];

function Book(title,author,pages){
    this.title=title
    this.pages=pages
    this.author=author
    this.read=false;
    this.id = crypto.randomUUID();
    console.log("check")
    this.info = ()=>{
        return `${this.title} by ${author}, ${pages} pages, ${this.read? "not read": "read"}`
    }
}


function addBookToLibrary(book){
    library.push(book)
     displayBooks();
}

function displayBooks(){
    display.innerHTML = ``
    library.forEach(book => {
        display.innerHTML += `<div class="card"><h3>${book.title}</h3></br><h4>${book.author}</h4></br><p>pages ${book.pages}</p></br> <button class="delete-book" data-id="${book.id}">Remove Book</button></div>`
    })
}


newBookBtn.addEventListener("click",()=>{
    dialog.showModal();
    console.log("in add")
})

closeBtn.addEventListener("click", () => {
    dialog.close();
  
});


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("in second add")
    const formData = new FormData(form);
    const title = formData.get('title')
    const author = formData.get('author')
    const pages = formData.get('pages')
    const newBook = new Book(title,author,pages)
    addBookToLibrary(newBook);
    dialog.close();
})

display.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-book')) {
        const id = e.target.dataset.id;
        console.log("Deleting book with ID:", id);
        library = library.filter(book => book.id !== id);
        displayBooks();
    }
});

