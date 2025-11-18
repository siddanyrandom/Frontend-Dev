class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return true;
        }
        return false;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Atomic Habits", "James Clear", "ISBN002"),
    new Book("Harry Potter", "J.K. Rowling", "ISBN003"),
    new Book("Clean Code", "Robert C. Martin", "ISBN004", true)
];

console.log("Available Books:");
books
    .filter(book => !book.isIssued)
    .forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
    });

function issueBookByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (!book) {
        console.log("Book not found.");
        return;
    }
    if (book.issueBook()) {
        console.log(`Book issued: ${book.title}`);
    } else {
        console.log("Book is already issued.");
    }
}

issueBookByISBN("ISBN002");
