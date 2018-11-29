const { Router } = require('express')
const route = Router();
const AuthHelper = require('../helper/authHelper')
const Auth = require('../auth/auth')
const userController =require('../controllers/user.controller');



route.post('/users/login',AuthHelper.valiadteUserDataLogin,userController.userLogin);


route.post('/users',[AuthHelper.valiadteUserDataRegister,AuthHelper.checkUserExist],userController.registerUser);
  /**
   * get current user 
   */
route.get('/user',Auth.required,userController.gerCurrentUser);




module.exports = route
/**
 *
 */