const User = require('../models/User');
const jwt = require('jsonwebtoken');
//const JWT_KEY=process.env.JWT_KEY;
//const bodyparser = require('body-parser');


//to handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {
        email: '',
        password: '',
        username: '',
        name: '',
        address: '',
        state: '',
        country: '',
        pan: '',
        phone: '',
        dob: '',
        accType: ''
    }

    //incorrect username
    if(err.message==='email is incorrect'){
        errors.email='email does not exist';   
    }

    //incorrect password
     if(err.message==='password is incorrect'){
        errors.password='incorrect password';
     }

    //duplicate error code
    if (err.code === 11000) {
         errors.email = 'that email is already registered';
         errors.username = 'that username is already used';
         errors.pan = 'pan no is already used';
         return errors;
    }

    //validation errors
    if (err.message.includes('email validation failed')) {
        Object.values(err.errors).forEach(({
            properties
        }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}
//create json web token
const maxAge = 3 * 24 * 60 * 60; //time in seconds
const createToken = (id) => {
    return jwt.sign({
        id
    }, 'my favorite pokemon is lucario', {
        expiresIn: maxAge
    });
}

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.signup_post = async (req, res) => {
    const {
        email,
        password,
        username,
        name,  
        address,
        state,
        country,
        pan,
        phone,
        dob,
        accType
    } = req.body;

    try {
        const user = await User.create({
            email,
            password,
            username,
            name,
            address,
            state,
            country,
            pan,
            phone,
            dob,
            accType
        });
        // const token=createToken(user._id);
        // res.cookie('jwt',token,{httpOnly:true,maxAge: maxAge * 1000 });
        res.status(201).json({
            user:user,
            message:'User added successfuly'
        });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(403).json({
            errors
        });
    }
}

module.exports.login_get =(req, res) => {

    res.render('login');
}

module.exports.login_post = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try{
        const user=await User.login(email,password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({user:user._id,message:'logged in successfuly',token:token});
    }
    catch(err){
        const errors=handleErrors(err);
        res.status(401).json({errors});
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt','', { maxAge: 1 });
    res.status(200).json({message:'Logout Successful'});    
  }
