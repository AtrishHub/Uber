const express = require('express');
const router = express.Router();


const{body}=require("express-validator");
const userController=require('../controllers/user.controller');
const authMiddleware=require('../middlewares/auth.middleware');

// user register
router.post('/register',[

   body('email').isEmail().withMessage('Invalid Email'),
   body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
   body('password').isLength({min:6}).withMessage('Password must me at least 6 digit')
],

userController.registerUser

) 

//we have to check the data coming from front end is valid or not so foe this we install a package name express validator and install it 

//user login
router.post('/login',[
 body('email').isEmail().withMessage('Invalid Email'),
 body('password').isLength({min:6}).withMessage('Password should be minnium 6 digit')
],
 userController.loginUser
 )

// Profile route

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);



module.exports=router;
