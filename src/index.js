const express= require('express')
const bodyParser=require('body-parser')
const route=require('./routes/route.js')
const mongoose=require('mongoose')
const app=express()

mongoose.set('strictQuery',true)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://karthikramadugu:Karthiksai1@karthikcluster.b2ikjot.mongodb.net/test",{
    useNewUrlParser:true
})
.then(()=> console.log("MongoDB connected"))
.catch(err=>console.log(err))
app.use('/',route)
app.listen(process.env.PORT || 3000, function(){
    console.log('express app running on port' +(process.env.PORT || 3000))
})