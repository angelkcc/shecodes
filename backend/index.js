import express from "express"
import connectDB from "./utlis/db.js"
import cors from "cors"
import ProductController from "./product/product.controller.js"
import UserController from "./user/user.controller.js"

const app = express()


connectDB()
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hello World')
})
app.use('/product', ProductController)

app.use('/user', UserController)

app.listen(3000,()=>{
    console.log('Server started successfully')
})