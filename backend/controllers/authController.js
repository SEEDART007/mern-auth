const User = require("../models/UserModel");

const signup=async(req,res)=>{
  const {username,email,password}=req.body;
  const newUser =await User.create({username,email,password})
  res.status(201).json({
    newUser,
    message:"new user created successfully"
  })
}
 







module.exports={signup}