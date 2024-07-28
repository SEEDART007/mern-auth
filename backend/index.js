const express = require('express')
const mongoose= require('mongoose')
const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute')
const dotenv = require('dotenv')
dotenv.config();
const app= express() 

mongoose.connect('mongodb+srv://wwwsiddharthachakraborty:uhMwfJo5dHza0vbf@cluster0.65zaaek.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'
).then(conn=>console.log("sucessfully connected to db")).catch(err=>console.log(err))
app.use(express.json())
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.listen(3000,()=>{ 
    console.log("server successfully started on port 3000");
})  