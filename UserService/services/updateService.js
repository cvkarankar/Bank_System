const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtDecode = require('jwt-decode');

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
    return errors;
}

//Retrive user
module.exports.getUser = (req, res) => {
        try{
            const decodedToken = jwtDecode(req.cookies.jwt);
            User.find({'_id':decodedToken.id})
            .then(result => {
                res.status(200).json({
                    userData: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
        }catch(err){
            const errors = handleErrors(err)
            res.status(403).json({
                error:errors
            })
        }
}

//Deleting a user
module.exports.deleteUser = (req, res) => {
    User.remove({
            _id: req.params.id
        })
        .then(() => {
            res.status(200).json({
                message: 'User deleted'
            })
        })
        .catch(err => {
            res.status(401).json({
                error: err
            })
        })
}

//Update an user
module.exports.updateUser = (req, res) => {
    try{
        const decodedToken = jwtDecode(req.cookies.jwt);
        console.log(decodedToken.id)
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            } else {
                User.findOneAndUpdate({_id:decodedToken.id}, {
                        $set: {
                            name: req.body.name,
                            username: req.body.username,
                            password: hash,
                            address: req.body.address,
                            state: req.body.state,
                            country: req.body.country,
                            email: req.body.email,
                            pan: req.body.pan,
                            phone: req.body.phone,
                            dob: req.body.dob,
                            accType: req.body.accType
                        }
                    })
                    .then(() => {
                        res.status(200).json({
                            message: 'Updated Successfully'
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        })
                    })
            }
    
        })
    }catch(err){
        res.status(401).json({
            error:'You are not logged in'
        })
    }
}

