const {Router}=require('express');
//const express = require('express');
const userController=require('../services/userService');
const updateController=require('../services/updateService');
const {requireAuth} = require('../middleware/auth');

const router=Router();

router.post('/signup',userController.signup_post);

router.post('/login',userController.login_post);

router.get('/logout',requireAuth,userController.logout_get);

router.get('/getUser',requireAuth,updateController.getUser);

router.put('/updateUser',requireAuth,updateController.updateUser);

router.delete('/deleteUser',requireAuth,updateController.deleteUser);

module.exports=router;