const express = require("express");
const app = express();
const routes = require('./routes');
const errorHandler = require('./errorHandler')

app.use(express.json())
app.use(routes)
require('./swagger')(app)
app.use(errorHandler)

app.listen(5000, () => {
    console.log('listening on 5000')
});
