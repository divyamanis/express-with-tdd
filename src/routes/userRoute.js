const express = require('express');
const { userSignUp } = require('../controllers/userController');
const userRouter = express.Router();

// app.get('/api/1.0/users',(req,res)=>{
//     res.status(200).send({data : 'Data send'})
// })
userRouter.post('/users', userSignUp);
module.exports = userRouter;