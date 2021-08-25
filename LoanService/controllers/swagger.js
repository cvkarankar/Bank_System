const express = require('express');
var app = express();
const {Router}=require('express');

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const router = Router();

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Bank Management System LoanService ",
        version: "1.0.0",
        description: "User Api for Bank Management System",
        contact: {
          name: "Chinmay Karankar",
          url: "https://in.linkedin.com/in/chinmay-karankar",
          email: "cvkarankar@gmail.com",
        },
        servers: ["http://localhost:7010"],
      },
    },
    apis: ["../LoanService/controllers/swagger.js"],
  };
const swaggerDocs = swaggerJSDoc(swaggerOptions);
router.use("/api-docs-loan", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * definitions:
 *  Loan:
 *   type: object
 *   properties:
 *    loanType:
 *     type: string
 *     description: type of loan
 *     example: 'Home'
 *    loanAmount:
 *     type: number
 *     description: amount of loan
 *     example: 50000
 *    date:
 *     type: Date
 *     description: date of loan
 *     example: '2020-09-09'
 *    rateOfInterest:
 *     type: number
 *     description: rate of interest of loan
 *     example: 5
 *    durationOfLoan:
 *     type: number
 *     description: duration of loan
 *     example: 4
 */

/**
 * @swagger
 * /applyLoan:
 *  post:
 *   summary: Apply Loan
 *   description: Apply loan
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Loan'
 *   responses:
 *    201:
 *     description: apply loan succesfully
 *    500:
 *     description: failure in applying loan
 */

 /**
 * @swagger
 * /getLoans:
 *  get:
 *   summary: Getting loan details
 *   description: Getting loans
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */

 /**
 * @swagger
 * /updateLoan:
 *  put:
 *   summary: update loan
 *   description: update the loan
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Loan'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Loan'
 */

 /**
 * @swagger
 * /deleteLoan/{_id}:
 *  delete:
 *   summary: delete loan
 *   description: delete loan
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
 *      description: id of the loan
 *      example: '611a2addd8ef1c5a148b3348' 
 *   responses:
 *    200:
 *     description: success
 *    400:
 *     description: error
 */

 module.exports=router;