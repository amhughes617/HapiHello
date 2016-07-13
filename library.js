'use strict'

module.exports = Library;

function Library() {
  this.books = [
    {title: 'book1', author: 'persona', borrowed: false, id: 0},
    {title: 'book2', author: 'personb', borrowed: false, id: 1},
    {title: 'book3', author: 'personc', borrowed: false, id: 2},
    {title: 'book4', author: 'persond', borrowed: false, id: 3},    
  ];
  return this;
}
Library.prototype.add = function (book) {
  book.borrowed = false;
  book.id = this.books.length;
  this.books.push(book);
}

Library.prototype.getAll = function() {
  return this.books;
}

Library.prototype.borrow = function(id) {
  for (let i = 0; i< this.books.length; i++) {
    if (this.books[i].id === id) {
      this.books[i].borrowed = true;s
    }
  }
};