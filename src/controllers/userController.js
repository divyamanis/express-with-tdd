const User = require('../models/user')
exports.userSignUp = async(req, res,next) => {
    try{
      console.log(req.body);
      const {name, email,password} = req.body;
      const user = new User({name,email,password});
      //const user = new User(req.body);
      await user.save();
      return res.status(200).send({ message: 'User created' });
    }
    catch(err){
      console.log(err.message);
      return res.status(500).send({message : err.message})
    }  
      
    }