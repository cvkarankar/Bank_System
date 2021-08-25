const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    const token = req.cookies.jwt;
    //check json web token exists or not
    if (token) {
        jwt.verify(token, 'my favorite pokemon is lucario', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
}
module.exports = auth;