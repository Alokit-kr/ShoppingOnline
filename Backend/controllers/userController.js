import asyncHandler from 'express-async-handler'
import User from '../Models/userModel.js'

// @desc Authenticate user and get token
// @router POST /api/users/login
// @access public
const authUser=asyncHandler(async(req,res)=>{
 const {email,password }= req.body
 const user= await User.findOne({ email })
 if(user && (await user.matchPassword(password))){ 
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:null
    })
 } else{
     res.status(401)
     throw new error('Invalid email or password')
 }
})

export { authUser }