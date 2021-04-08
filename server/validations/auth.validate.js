const validate = require('./validate')
const { body } = require('express-validator');

module.exports = {
    signup: () => validate(
        [
            body('email')
                .isEmail()
                .withMessage('Invalid email field'),
            body('password')
                .isLength({min: 3})
                .withMessage('"password" must be at least 3 chars lenght')
        ]
    )
}