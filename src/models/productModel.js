/*{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	name:"Catcher in the Rye",
	category:"book",
	price:70 //mandatory property
}*/

const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
	name:String,
	category:String,
	price:{
		type:Number,
		required:true,
	}
})
module.exports=mongoose.model('Product',productSchema)