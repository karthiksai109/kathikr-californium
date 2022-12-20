const mongoose=require('mongoose')
const countSchema=new mongoose.Schema({
    id:String,
    seq:Number
})
module.exports=mongoose.model('Counter',countSchema)