const mongoose=require('mongoose')

const UserSSchema=new mongoose.Schema({
	name:String,
    balance:Number,
	address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
	
})
module.exports=mongoose.model('Usere',UserSSchema)