 //const express = require('express');
 //var app = express();
const {Router}=require('express');

 const swaggerJSDoc = require("swagger-jsdoc");
 const swaggerUI = require("swagger-ui-express");

 const router = Router();

 const swaggerOptions = {
    definition: {
       openapi: "3.0.0",
     info: {
         title: "Bank Management System UserService ",
         version: "1.0.0",
         description: "User Api for Bank Management System",
         contact: {
           name: "Chinmay Karankar",
           url: "https://in.linkedin.com/in/chinmay-karankar",
           email: "cvkarankar@gmail.com",
         },
         servers: ["http://localhost:7000"],
       },
     },
     apis: ["../UserService/Controllers/swagger.js"],
   };
   const swaggerDocs = swaggerJSDoc(swaggerOptions);
   router.use("/api-docs-user", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * definitions:
 *  User:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the user
 *     example: 'Rehan'
 *    username:
 *     type: string
 *     description: Username of the user
 *     example: 'Rehan121'
 *    password:
 *     type: string
 *     description: password of the user
 *     example: 'xyz@@#$5'
 *    address:
 *     type: string
 *     description: address of the user
 *     example: 'Chandrapur'
 *    state:
 *     type: string
 *     description: State of the user
 *     example: 'Maharashtra'
 *    country:
 *     type: string
 *     description: country of the user
 *     example: 'India'
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'Rehan@gmail.com'
 *    pan:
 *     type: string
 *     description: Pan details of the user
 *     example: 'XYZ12345'
 *    phone:
 *     type: number
 *     description: contact number of the user
 *     example: 7447333424
 *    dob:
 *     type: date
 *     description: Birth date of the user
 *     example: '05/11/1999'
 *    acctype:
 *     type: string
 *     description: account type of the user
 *     example: 'Saving account'
 */

/**
 * @swagger
 * /signup:
 *  post:
 *   summary: register user
 *   description: register user for the Bank Management System
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: employee created succesfully
 *    500:
 *     description: failure in creating employee
 */


/**
 * @swagger
 * definitions:
 *  Login:
 *   type: object
 *   properties:
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'cvkarankar@gmail.com'
 *    password:
 *     type: string
 *     description: password of the user
 *     example: '123456789'
 */
 
/**
 * @swagger
 * /login:
 *  post:
 *   summary: login user
 *   description: login user for the Bank Management System
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Login'
 *   responses:
 *    200:
 *     description: login succesfully
 *    500:
 *     description: failure in login user
 */


/**
 * @swagger
 * /logout:
 *  get:
 *   summary: Logout user
 *   description: Logout The user
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */



/**
 * @swagger
 * /getUser:
 *  get:
 *   summary: Getting user
 *   description: Getting The user
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */



/**
 * @swagger
 * /updateUser:
 *  put:
 *   summary: update user
 *   description: update the current
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/User'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/User'
 */
 //module.exports=router;


/**
 * @swagger
 * /deleteUser/{_id}:
 *  delete:
 *   summary: delete user
 *   description: delete user
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: _id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the user
 *      example: '611a2addd8ef1c5a148b3348' 
 *   responses:
 *    200:
 *     description: success
 *    400:
 *     description: error
 */

 module.exports=router;
