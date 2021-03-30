const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Customer Api',
            description: 'Customer Api Info',
            contact: {
                name: "Boris B"
            },
            servers: ["http://localhost:3000/"]
        }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}