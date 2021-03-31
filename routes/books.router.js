const { Router } = require("express");

const r = Router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *
 *
 * 
 */

r.get("/", (req, res) => {
    res.send("books");
});

module.exports = r;
