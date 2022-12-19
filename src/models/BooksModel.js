/*1. Write down the schemas for book and authors (keeping the data given below in mind). Also create the documents (corresponding to the data given below) in your database.
*/
const mongoose=require('mongoose')
const BookSchema=new mongoose.Schema(
    { 
    name:String,
    author_id:{
        type:Number,
        required:true,
    },
    
    price:Number,
    ratings:Number,
} ,{timestamps:true})
module.exports=mongoose.model('Newbook',BookSchema)


