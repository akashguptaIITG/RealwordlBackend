
const { User } = require('../models/index')
const { Op } = require('sequelize')


exports.gerCurrentUser= async (req,res)=>{
    console.log("==========get current user api============")
    const user = await User.findOne({ where: { id: req.payload.id } })
        if(!user)
        { 
           res.sendStatus(401).json({"errors": {"msg": ["authfailed"]}}); 
        }
        else 
        {
          res.json({user: user.toAuthFor()});
        }
      }



exports.userLogin = async (req,res)=>{
    console.log("================login procedure statred===========");
    const existUser = await User.findOne({
        where: {
                [Op.and]: [{email: req.body.user.email}, {hash: req.body.user.password}] 
            }
        })
            if(existUser===null)
                {
                    res.status(422).json({"errors": {"email or password": ["is invalid"]}});
                    console.log("------------auth failed-------------");
                }
            else
                {
                    res.status(200).json({user: existUser.toAuthFor()});
                    console.log("=============login sucessfull procedure ended========");
            }       
        }




exports.registerUser = async (req,res)=>{
    console.log("================registartion procedure statred===========");
        const newUser = await User.create({
            username:req.body.user.username,
            email: req.body.user.email,
            hash: req.body.user.password
        })
        console.log("=============registartion procedure ended========");
        res.status(200).json({user: newUser.toAuthFor()});
        console.log("------------reposnse sended-------------");
  };
  /**
   * get current user 
   */

//     setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   };

