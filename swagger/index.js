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
    apis: ["./routes/**/*.js"]   
}
const swaggerDocs = swaggerJsDoc(options);

console.log(JSON.stringify(swaggerDocs, null, 2))

module.exports = function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}