const userModel=require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body } = require('express-validator');
const blacklistTokenModel=require('../models/blacklistToken.model');
const captainModel=require('../models/captain.model');



module.exports.authUser=async(req,res,next)=>{

const token = req.cookies.token||req.headers.authorization?.split(' ')[1];
console.log(token);
 if(!token){
    return res.status(401).json({message:'Unathorized'});

 }
const isBlacklisted=await blacklistTokenModel.findOne({token:token});
if(isBlacklisted){
    return res.status(401).json({message:'Unauthorized'});  
}

 try{
const decoded=jwt.verify(token,process.env.JWT_SECRET);
const user=await userModel.findById(decoded._id);
req.user=user;
return next();
 }catch(err){
    return res.status(401).json({message:'Unauthorized'});
 }
}

module.exports.authCaptain=async(req,res,next)=>{

    const token = req.cookies.token||req.headers.authorization?.split(' ')[1];
    console.log(token);
     if(!token){
        return res.status(401).json({message:'Unathorized1'});
    
     }
    const isBlacklisted=await blacklistTokenModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized2'});  
    }
    
     try{
    
    const decoded=jwt.verify(token,process.env.JWT_SECRET);

     
    const captain=await captainModel.findById(decoded._id);
    req.captain=captain;
    return next();
     }catch(err){
      console.error('Error in auth middleware:', err);
        return res.status(401).json({message:'Unauthorized3'});
     }
    }



