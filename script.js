



function Book(title,author,pages,read){
    this.title=title
    this.pages=pages
    this.author=author
    this.read=read
    this.info = ()=>{
        return `${this.title} by ${author}, ${pages} pages, ${this.read}`
    }
}