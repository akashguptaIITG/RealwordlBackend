const Helper  = require('./helper');
const { User } = require('../models/index')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


const AuthHelper = {
    valiadteUserDataRegister:(req,res,next)=>{
        console.log("validating");
                if(Helper.isValidateEmail(req.body.user.email) && req.body.user.password.length>=8 && req.body.user.username!=null)
                    {
                        next();
                    }
                 else
                    {
                        res.status(422).json({"errors": {"email": ["is invalid"],"username": ["is invalid"]}});
                    }    
                }, 
        
    valiadteUserDataLogin:(req,res,next)=>{ 
            if(Helper.isValidateEmail(req.body.user.email) && req.body.user.password.length>=8)
            {
                next();
            }    
            else
            {
                res.status(422).json({"errors": {"email": ["is invalid"],"username": ["is invalid"]}});
            }    
        
    },
    checkUserExist:(req,res,next)=>{
        User.findOne({
            where: {
                [Op.or]: [{email: req.body.user.email}, {username: req.body.user.username}] 
            }
        }).then((userExist)=>{
            if(userExist!==null)
                {
                    res.status(422).json({errors: {email: ["has already been taken"], username: ["has already been taken"]}})
                }
            else
                {
                    next();
                }    
        })
        .catch((err)=>{console.log(err)});
    }
     
}
module.exports =  AuthHelper 