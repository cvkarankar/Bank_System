const jwt =require('jsonwebtoken');
//const JWT_KEY=process.env.JWT_KEY
//const User = require('../models/User');


const requireAuth=(req,res,next)=>{

    const token=req.cookies.jwt;

    //check json web token exists or not
    if(token){
        jwt.verify(token,'my favorite pokemon is lucario',(err)=>{
            if(err){
                res.status(401).json({
                    error:'you are not login'
                })
            }
            else{
                next();
            }
        });
    }
    else{
        res.status(401).json({
            error:'you are not login'
        })
    }
}
//check current user
// const checkUser=(req,res,next)=>{
//     const token=req.cookies.jwt;
//     if(token){
//         jwt.verify(token,'my favorite pokemon is lucario',async(err,decodedToken)=>{
//             if(err){
//                 console.log(err.message);
//                 res.locals.user=null;
//                 next();
//             }
//             else{
//                 console.log(decodedToken);
//                 let user=await User.findById(decodedToken.id);
//                 res.locals.user=user;
//                 next();
//             }
//         }); 
//     }
//     else{
//         res.locals.user=null;
//         next();
//     }
// }
module.exports={requireAuth};