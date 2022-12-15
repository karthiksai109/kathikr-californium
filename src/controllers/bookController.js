const BookModel=require('../models/bookModel')

const bookCreate=async function(req,res){
    let bookData=req.body
    let ReqData= await BookModel.create(bookData)
    res.send({msg:ReqData})
}
const bookGenerate=async function(req,res){
    let Data= await BookModel.find()
    res.send({msg:Data})

}

module.exports.bookCreate=bookCreate
module.exports.bookGenerate=bookGenerate
