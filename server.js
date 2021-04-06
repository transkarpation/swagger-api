const express = require("express");
const app = express();
const routes = require("./routes");
const errorHandler = require("./errorHandler");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
require('./config/passport.config');
const auth = require('./middlewares/auth.middleware')
const whiteList = require('./config/routes-white-list')

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(passport.initialize());
require("./swagger")(app);
app.use(auth(whiteList), routes);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("listening on 5000");
});
