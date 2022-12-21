const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

const MUUID = require('uuid-mongodb');
console.log(Date())


const mongoose=require('mongoose')

const cusSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobileNumber:{
        type:String,
        maxlength:10,
        minlength:10
    },

    emailId: {
        type: String,
        required: [true, "Please enter your email"],
        validate: [validateEmail, "Please enter a valid email"],
        unique: true
    },
    DOB:{
        type:Date,
        trim:true
    },
    address:String,
    customerId:{
        type:String,
        default:MUUID.v1()
    },
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"],
        required:true
    },
    isDeleted:{
        type:Boolean,
        enum:[true,false],
        default:false
    }


})
module.exports=mongoose.model('Custom',cusSchema)