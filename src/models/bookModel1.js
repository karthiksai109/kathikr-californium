/*Create a books collection in your DB ( using bookModel with
 following fields)- bookName( mandatory field), price containing 
 Indian and european price, year ( should be 2021 if no year is
provided) , tags array, authorName, totalPages , stockAvailable 
( true false)
*/
const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
   bookName: {
       type: String,
       required: true

   },
   prices: {
    indianPrice: String,
    europeanPrice: String,
    
},
year: {
    type:Number,
    default:2021
},
authorName: String,
tags: [ String ],
totalPages:Number,
stockAvailable :Boolean
}, {timestamps: true} )

module.exports = mongoose.model( 'BookCollection', bookSchema )