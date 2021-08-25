const Loan = require('../models/loan');
const jwtDecode = require('jwt-decode');

//to handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {
        loanType: '',
        loanAmount: '',
        date: '',
        rateOfInterest: '',
        durationOfLoan: ''
    }
    //validation errors
    if (err.message.includes('loan validation failed')) {
        Object.values(err.errors).forEach(({
            properties
        }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.applyLoan_post = async (req, res) => {
    
        const decodedToken = jwtDecode(req.cookies.jwt);
        const {
            userId=decodedToken.id,
            loanType,
            loanAmount,
            date,
            rateOfInterest,
            durationOfLoan
        } = req.body;

        try {
            const loan = await Loan.create({
                userId,
                loanType,
                loanAmount,
                date,
                rateOfInterest,
                durationOfLoan
            });
            res.status(200).json({
                loan: loan,
                msg: `Loan applied successfully`
            });
        } catch (err) {
            const errors = handleErrors(err);
            res.status(403).json({
                errors
            });
        }
}