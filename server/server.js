const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");

const app = express();
require('./config/passport.config');
const routes = require("./routes");
const auth = require('./middlewares/auth.middleware')
const whiteList = require('./config/routes-white-list')
const errorHandler = require("./errorHandler");


app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(passport.initialize());
require("./swagger")(app);
app.use(auth(whiteList), routes);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("listening on 5000");
  console.log("visit http://localhost:5000/api-docs for Swagger Ui docs")
});
