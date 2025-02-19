class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.isAvailable = true;
    }
}

class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {
        this.books.push(book);
    }

    borrowBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            console.log(`You have borrowed the book: "${title}".`);
        } else {
            console.log(`The book "${title}" is currently unavailable.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            book.isAvailable = true;
            console.log(`You have returned the book: "${title}".`);
        }
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }

    getAllBookTitles() {
        return this.books.map(book => book.title);
    }

    listAllBooks() {
        for (const book of this.books) {
            console.log(`${book.title} - ${book.author} (${book.yearPublished}) - ${book.isAvailable ? "Available" : "Not Available"}`);
        }
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`The book "${title}" has been removed from the library.`);
        } else {
            console.log(`The book "${title}" was not found.`);
        }
    }
}

const myLibrary = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log("List of all books:");
myLibrary.listAllBooks();

console.log("\nBorrowing '1984':");
myLibrary.borrowBook("1984");

console.log("\nList of available books:");
console.log(myLibrary.getAvailableBooks().map(book => book.title));

console.log("\nReturning '1984':");
myLibrary.returnBook("1984");

console.log("\nRemoving 'To Kill a Mockingbird':");
myLibrary.removeBook("To Kill a Mockingbird");

console.log("\nList of all books after removal:");
myLibrary.listAllBooks();
