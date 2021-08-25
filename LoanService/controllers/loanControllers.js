const {Router}=require('express');
const express = require('express');
const loanController=require('../services/loanService');
const updateController=require('../services/updateService');
const {requireAuth}=require('../../UserService/middleware/auth')

const router=Router();
var app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");


router.post('/applyLoan',requireAuth,loanController.applyLoan_post);

router.get('/getLoans',requireAuth,updateController.getLoans);

router.put('/updateLoan/:id',updateController.updateLoan);

router.delete('/deleteLoan/:id',updateController.deleteLoan);

module.exports=router;