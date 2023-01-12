const express= require('express')
const bodyParser=require('body-parser')
const route=require('./routes/route.js')
const mongoose=require('mongoose')
const multer=require('multer')
const app=express()

mongoose.set('strictQuery',true)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multer().any())

mongoose.connect("mongodb+srv://vishalsharma:8423354673@vishal-db.bpwswlx.mongodb.net/group21Database",{
    useNewUrlParser:true
})
.then(()=> console.log("MongoDB connected"))
.catch(err=>console.log(err))
app.use('/',route)
app.listen(process.env.PORT || 3001, function(){
    console.log('express app running on port' +(process.env.PORT || 3001))
})