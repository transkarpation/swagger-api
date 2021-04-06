/** 
*@swagger
*   components:
*       securitySchemes:
*           bearerAuth:
*               type: http
*               scheme: bearer
*               bearerFormat: JWT
*       schemas:
*           BookRequest:
*               type: object
*               required:
*                   -   title
*                   -   author
*               properties:
*                   title:
*                       type: string
*                       description: The book title
*                   author:
*                       type: string
*                       description: The book author
*               example:
*                   title: The One
*                   author: Djohn Dow
*           BookResponse:
*               type: object
*               properties:
*                   id:
*                       type: number
*                       description: The book autogenerated id
*                   title:
*                       type: string
*                       description: The book title
*                   author:
*                       type: string
*                       description: The book author
*                   created_at:
*                       type: string
*                       description: Created at 2021-04-02T10:54:55.178Z
*                   updated_at:
*                       type: string
*                       description: Update at 2021-04-02T10:54:55.178Z
*               example:
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
*       post:
*           summary: Create book
*           tags: [Books]
*           security:
*               - bearerAuth: []
*           requestBody:
*               required: true
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/BookRequest'
*           responses:
*               200:
*                   description: The book was successfully created
*                   content:
*                       application/json:
*                           schema:
*                               $ref: '#/components/schemas/BookResponse'
*/

/**
*@swagger
*   /books:
*       get:
*           summary: Returns the list of all books
*           tags: [Books]
*           security:
*               - bearerAuth: []
*           responses:
*               200:
*                   description: The list of the books
*                   content:
*                       application/json:
*                           schema:
*                               type: array
*                               items:
*                                   $ref: '#/components/schemas/BookRequest'
*/

/**
*@swagger
*   /books/{id}:
*       get:
*           summary: Get the book by id
*           tags: [Books]
*           security:
*               - bearerAuth: []
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
*                               $ref: '#/components/schemas/BookRequest'
*               404:
*                   description: The book was not found
*/

/**
 *@swagger
 *  /books/{id}:
 *      put:
 *          summary: Update the book by the id
 *          tags: [Books]
 *          security:
 *              - bearerAuth: []
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  schema:
 *                      type: number
 *                  required: true
 *                  description: The book id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BookRequest'
 *          responses:
 *              200:
 *                  description: The book was successfuly updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/BookResponse'
 *              404:
 *                  description: Not found
 */