const Loan = require('../models/loan');
const jwtDecode = require('jwt-decode');

//Retrive loans
module.exports.getLoans = (req,res,next)=>{
        const decodedToken = jwtDecode(req.cookies.jwt);
        Loan.find({userId:decodedToken.id})
        .then(result=>{
            res.status(200).json({
                userData:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })

    }

//Deleting a loan by Id
module.exports.deleteLoan = (req, res, next) => {
    try {
        Loan.remove({
                _id: req.params.id
            })
            .then(result => {
                res.status(200).json({
                    message: 'Loan deleted'
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    } catch (err) {
        res.status(400).json({
            error: 'You are not logged in'
        })
    }
}

//Update an loan by Id
module.exports.updateLoan = (req, res, next) => {
    Loan.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                loanType: req.body.loanType,
                loanAmount: req.body.loanAmount,
                date: req.body.date,
                rateOfInterest: req.body.rateOfInterest,
                durationOfLoan: req.body.durationOfLoan
            }
        })
        .then(() => {
            res.status(201).json({
                message: 'Updated Successfully'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(401).json({
                error: err
            })
        })
}