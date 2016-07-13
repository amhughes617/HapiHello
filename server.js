'use strict'

const http = require('http');
const hapi = require('hapi');
const boom = require('boom');

const Library = require('./library');

let books = new Library();
books.getAll();

const server = new hapi.Server;

server.connection({
  host: 'localhost',
  port: 9000,
});

server.route({
  method: 'GET',
  path: '/library/books',
  handler: function (request, response) {
    response(books.getAll());
  }
});

server.route({
  method: 'POST',
  path: '/library/add',

  handler: function (request, response) {
    books.add({
      title: 'Huck Finn',
      author: 'Mark Twain',
    });
    response();
  }
});

server.route({
  method: 'PATCH',
  path: '/library/borrow/{bookId}',
  handler: function (req, res) {
    let bookId = req.params.bookId;
    books.borrow(parseInt(bookId));
    res();
  }
})

server.route({
  method: 'GET',
  path: '/library/books',
  
  handler: function (req, res) {
    
  }
})
server.start();