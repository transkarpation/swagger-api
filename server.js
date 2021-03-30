const express = require("express");
const app = express();
const routes = require('./routes')


app.use(routes)
require('./swagger')(app)

app.listen(3000, () => {
    console.log('listening on 3000')
});
