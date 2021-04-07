const { Router } = require("express");
const {createBookValidate, getBookById} = require('../validations/books.validate')
const booksController = require('../controllers/books.controller')

const r = Router();

// ../swagger/routes/books.router.doc.js
r.post('/', createBookValidate(), booksController.create)
r.get("/", booksController.get);
r.get("/:id", getBookById(), booksController.getId)
r.put('/:id', getBookById(), booksController.update)
r.delete('/:id', getBookById(), booksController.delete)

module.exports = r;
