const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const passport = require("passport");

const r = Router();

/**
 *@swagger
 *   tags:
 *       name: Auth
 *       description: Auth routes
 */

/**
 *@swagger
 *   components:
 *       schemas:
 *           SignupRequest:
 *               type: object
 *               required:
 *                   -   email
 *                   -   password
 *               properties:
 *                   email:
 *                       type: string
 *                       description: User email
 *                   password:
 *                       type: string
 *                       description: User password
 *               example:
 *                       email: u@i.ua
 *                       password: 1234
 *           SignupResponse:
 *               type: object
 *               properties:
 *                   email:
 *                       type: string
 *                   token:
 *                       type: string
 *           SigninRequest:
 *               type: object
 *               required:
 *                   -   email
 *                   -   password
 *               properties:
 *                   email:
 *                       type: string
 *                   password:
 *                       type: string
 *           SigninResponse:
 *               type: object
 *               properties:
 *                   id:
 *                       type: number
 *                       description: unique user id
 *                   email:
 *                       type: string
 *                   token:
 *                       type: string
 *           ApiConflictResponse:
 *               type: object
 *               properties:
 *                   message:
 *                       type: string
 */

/**
 *@swagger
 *   /auth/signup:
 *       post:
 *           summary: User signup
 *           tags: [Auth]
 *           requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/SignupRequest'
 *           responses:
 *               200:
 *                   description: Success
 *                   content:
 *                       application/json:
 *                           schema:
 *                               $ref: '#/components/schemas/SignupResponse'
 *               409:
 *                   descripion: Conflict
 *                   content:
 *                       application/json:
 *                           schema:
 *                               $ref: '#/components/schemas/ApiConflictResponse'
 */
r.post("/signup", passport.authenticate('signup', {session: false}), authController.signup);

/**
 *@swagger
 *   /auth/signin:
 *       post:
 *           summary: User singin
 *           tags: [Auth]
 *           requestBody:
 *               required: true
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/SigninRequest'
 *           responses:
 *               200:
 *                   description: Success
 *                   content:
 *                       application/json:
 *                           schema:
 *                               $ref: '#/components/schemas/SigninResponse'
 */
r.post("/signin", passport.authenticate('login', {session: false}), authController.signin);

module.exports = r;
