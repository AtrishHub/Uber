const express=require('express');
const router= express.Router();
const{body}=require("express-validator");
const captainController=require('../controllers/captain.controller');   
const authMiddleware=require('../middlewares/auth.middleware');
//Register route
router.post('/register',[
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters'),
        body('password').isLength({min:6}).withMessage('Password length must be at least 6 characters'),
        body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters'),
        body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 characters'),
        body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1'),
        body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle Type'),
],
captainController.registerCaptain
);

//login
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password length must be at least 6 characters'),
],
captainController.loginCaptain
);


// profile
router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);

//logout

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);




module.exports=router;