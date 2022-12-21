const kCustomModel=require("../models/karcustom")
const mongoose=require('mongoose')
const MUUID = require('uuid-mongodb');
const karcustom = require("../models/karcustom");




let ObjectId=mongoose.Schema.Types.ObjectId

const catSchema=new mongoose.Schema({
    cardNumber:String,
    cardType:{
        type:String,
        enum:['REGULAR','SPECIAL']
    },
    customerName:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['ACTIVE','INACTIVE'],
        default:'ACTIVE'
    },
    vision:String,
    customerId:{
        type:ObjectId,
        ref:"Custom",
        
        
    },
    isDeleted:{
        type:Boolean,
        enum:[true,false]
    }

})

module.exports=mongoose.model('Card',catSchema)

//2f08d1c8-68cf-4e95-b7f0-45904068f08a
//"04f46bd0-3bd4-49d6-9f87-e59e66746913",