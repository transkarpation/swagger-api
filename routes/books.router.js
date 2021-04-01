const { Router } = require("express");

const r = Router();

/** 
*@swagger
*   components:
*       schemas:
*           Book:
*               type: object
*               required:
*                   -   title
*                   -   author
*               properties:
*                   id:
*                       type: number
*                   title:
*                       type: string
*                       description: The book title
*                   author:
*                       type: string
*                       description: The book author
*               example:
*                   id: 1
*                   title: The One
*                   author: Djohn Dow
*/

/**
*@swagger
*   tags:
*       name: Books
*       description: The books managing API
*/

/**
*@swagger
*   /books:
*       get:
*           summary: Returns the list of all books
*           tags: [Books]
*           responses:
*               200:
*                   description: The list of the books
*                   content:
*                       application/json:
*                           schema:
*                               type: array
*                               items:
*                                   $ref: '#/components/schemas/Book'
*/
r.get("/", (req, res) => {
    res.send("books");
});

/**
*@swagger
*   /books/{id}:
*       get:
*           summary: Get the book by id
*           tags: [Books]
*           parameters:
*               -   in: path
*                   name: id 
*                   schema:
*                       type: number
*                   required: true
*                   description: The book id
*           responses:
*               200:
*                   description: The book description by id
*                   content:
*                       application/json:
*                           schema:
*                               $ref: '#/components/schemas/Book'
*               404:
*                   description: The book was not found
*/
r.get("/:id", (req, res) => {
    res.send('/books/:id')
})

/**
*@swagger
*   /books:
*       post:
*           summary: Create book
*           tags: [Books]
*           requestBody:
*               required: true
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Book'
*           responses:
*               200:
*                   description: The book was successfully created
*                   content:
*                       application/json:
*                           schema:
*                               $ref: '#/components/schemas/Book'
*/
r.post('/', (req, res) => {
    res.send('post /books')
})



r.put('/:id', (req, res) => {
    res.send('put /books')
})

module.exports = r;
