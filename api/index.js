import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'

dotenv.config()


mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to DB")
}).catch((err) => {
    console.log(err)
})


const app = express();

app.listen(3000, () => {
    console.log("Server is srnning on port 3000  ")
})

app.use('/api/user',userRouter)

// app.get('/test', ( req , res) =>{
//    res.send("hello world") 
// } )