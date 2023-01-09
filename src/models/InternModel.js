const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.ObjectId
const InternSchema=new mongoose.Schema({
    
        name: {
            type:String,
            require:true,
            trim:true
        },
         email: {
            type:String,
            require:true,
            unique:true,
            
         },
         mobile: {
            type:String,
            unique:true,
            require:true,
           

            }, 
         collegeId: {
           type: ObjectId,
             ref: "College"
         },
        isDeleted: {
            type:Boolean, 
            default: false
        }
        
})

module.exports=mongoose.model('Intern',InternSchema)