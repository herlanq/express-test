const booklist = require('../data/books.json');

const books = {
  getAll: (req, res) => {
    if (booklist) {
      return res.status(200).send(booklist);
    } else {
      return res.sendStatus(404);
    }
  },

  getById: (req, res) => {
    const books = booklist.filter(a => a.Id == req.params.id);
    if (books && books.length) {
      return res.status(200).send(books);
    } else {
      return res.sendStatus(404);
    }
  },
  getByAuthorId: (req, res) => {
    const books = booklist.filter(a => a.AuthorId == req.params.id);
    if (books && books.length) {
      return res.status(200).send(books);
    } else {
      return res.sendStatus(404);
    }
  }
};

module.exports = books;
