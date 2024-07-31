const User = require("../models/UserModel");
const bcrypt=require('bcryptjs')
const {errorHandler}= require("../utils/error")
const jwt=require('jsonwebtoken')

const signup=async(req,res,next)=>{
  const {username,email,password}=req.body;
  const hashedPassword=bcrypt.hashSync(password,10)
  const newUser =await User.create({username,email,password:hashedPassword}) 
  try{
    res.status(201).json({
      newUser,
      message:"new user created"
    })

  }catch(err){
  next(errorHandler(500,"internal server error"))
  }
  

} 

const signin=async(req,res,next)=>{
  const {email,password}=req.body;

  try {
    const validUser= await User.findOne({email})
    if(!validUser) return next(errorHandler(401,"User not found"))
      const validPassword=bcrypt.compareSync(password,validUser.password)
    if(!validPassword) return next(errorHandler(401,"wrong credentials"))


      const token=jwt.sign({id:validUser._id},"secret",{
        expiresIn:'3d'
      });
      res.cookie('access_token',token,{httpOnly:true}).status(200).json(validUser)
    
  } catch (error) {
    next(error)
  }
}
 


 




module.exports={signup,signin}