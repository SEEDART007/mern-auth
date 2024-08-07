const User = require("../models/UserModel")
const { errorHandler } = require("../utils/error")
const bcrypt = require('bcryptjs')


const updateUser=async(req,res,next)=>{
if(req.user.id!==req.params.id){
    return next(errorHandler(401,"you can only update your account"))
}
try {
    if(req.body.password){
        req.body.password=await bcrypt.hash(req.body.password,12)
    }
    const updateUserProfile= await User.findByIdAndUpdate(req.params.id,{
        $set:{
       username:req.body.username,
       password:req.body.password,
       email:req.body.email,
       profilePic:req.body.profilePic

        }
    }
,
{new:true})
res.status(200).json({
    updateUserProfile
})
    
} catch (error) {
    next(error)
}

}

module.exports={updateUser}