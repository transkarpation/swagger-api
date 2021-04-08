const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const passport = require("passport");

const r = Router();

r.post("/signup", passport.authenticate('signup', {session: false}), authController.signup);
r.post("/signin", passport.authenticate('login', {session: false}), authController.signin);

module.exports = r;
