const express = require('express');
const app = express();

const User = require('./models/user');
const userRouter = require('./routes/userRoute');


app.use(express.json())
app.use('/api/1.0',userRouter)
module.exports = app;