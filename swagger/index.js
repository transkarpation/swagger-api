const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
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
    apis: ["./routes/**/*.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}