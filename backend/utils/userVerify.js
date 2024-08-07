const jwt = require('jsonwebtoken')
const dotenv= require('dotenv');
const { errorHandler } = require('./error');
dotenv.config()

const verifyToken=(req,res,next)=>{
const token= req.cookies.access_token;
if(!token){
  return   next(errorHandler(401,"you are not authenticated"))
}
jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err) return next(errorHandler(401,"access denied,token is not valid"))

    req.user=user;
    next();
})

}


module.exports={verifyToken}