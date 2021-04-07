const validate = require('./validate')
const { body, param } = require('express-validator');

module.exports = {
    createBookValidate: () => validate(
        [
            body('title')
                .isLength({min: 4})
                .withMessage('"title" must be al least 4 characters lenght'),
            body('author')
                .isLength({min: 4})
                .withMessage('"author" must be at least 4 chars lenght')
        ]
    ),
    getBookById: () => validate(
        [
            param('id', 'invalid id param')
                .isInt()
                .custom(val => val > 0)
        ]
    )
}