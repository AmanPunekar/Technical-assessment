class Author {
    constructor(name, nationality) {
        this.name = name; 
    }
}

class Book {
    constructor(title, author, language, mrp, isbn, genre) {
        this.title = title; 
        this.author = author.name;
        this.language = language; 
        this.mrp = mrp; 
        this.isbn = isbn; 
        this.genre = genre; 
    }
}

class Patron {
    constructor(name) {
        this.name = name; 
    }
}

class LibraryManagement {
    constructor() {
        this.books = []; 
        this.patrons = []; 
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    addPatron(patron) {
        this.patrons.push(patron);
    }

    removePatron(name) {
        this.patrons = this.patrons.filter(patron => patron.name !== name);
    }
}

const author1 = new Author("Chetan Bhagat");
const book1 = new Book("Two States", author1, "English", "Rs.289", "9781408855652", "Love Story");
const book2 = new Book("Five point someone", author1, "English", "Rs. 300", "9780544003415", "Love Story");

const patron1 = new Patron("Tapsi Deokar", "Premium");
const patron2 = new Patron("Jacky Mate", "Standard");

const library = new LibraryManagement();


library.addBook(book1);
library.addBook(book2);

library.addPatron(patron1);
library.addPatron(patron2);

console.log(library); 


