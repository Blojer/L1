const book = {
  name: 'Harry Potter and the Prisoner of Azkaban',
  author: 'Joanne Rowling',
  year: 1997,
  // Методы для получения названия, автора и года издания книги
  getName() {
    return this.name;
  },

  getAuthore() {
    return this.author;
  },

  getYear() {
    return this.year;
  },
  // Методы для изменения названия, автора и года издания книги
  updateName(newName) {
    this.name = newName;
  },
  updateAuthore(newAuthor) {
    this.author = newAuthor;
  },
  updateYear(newYear) {
    this.year = year;
  }
};

console.log(book.getName());
console.log(book.getAuthore());
console.log(book.getYear());

book.updateName('Harry Potter and the Order of the Phoenix');
book.updateAuthore('J. K. Rowling');
book.updateYear(2003);

console.log(book.getName());
console.log(book.getAuthore());
console.log(book.getYear());
