const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Customer Api',
            description: 'Customer Api Info',
            version: '1.0.0',
            contact: {
                name: "Boris B"
            },
        },
        servers: [{url: "http://localhost:5000/"}],
    },
    // ['.routes/*.js']
    apis: ["./swagger/routes/**/*.js"]   
}
const swaggerDocs = swaggerJsDoc(options);

module.exports = function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}