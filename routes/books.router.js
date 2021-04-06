const { Router } = require("express");
const {createBookValidate} = require('../validations/books.validate')
const booksController = require('../controllers/books.controller')

const r = Router();

// ../swagger/routes/books.router.doc.js
r.post('/', createBookValidate(), booksController.create)
r.get("/", booksController.get);
r.get("/:id", booksController.getId)
r.put('/:id', booksController.update)

module.exports = r;
