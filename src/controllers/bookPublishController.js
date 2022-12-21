const newAuthorModel=require("../models/authorModel")
const newPublisherModel=require('../models/publisherModel')
const newBookModel=require('../models/bookModel');
const createNewAuthor=async function(req,res){
    let data=req.body
    let newAuthor=await newAuthorModel.create(data)
    res.send({msg:newAuthor})

}
module.exports.createNewAuthor=createNewAuthor

const createNewPublisher=async function(req,res){
    let data=req.body
    let newPublisher=await newPublisherModel.create(data)
    res.send({msg:newPublisher})

}
module.exports.createNewPublisher=createNewPublisher

const createNewBook=async function(req,res){
    let data=req.body

    //a.The authorId is present in the request body. If absent send an error message that this detail is required

    let x=Object.keys(req.body)
    if(!x.includes('author')){
        res.send({error:'author objectId detail is required'})
    }
    else{
        //b.If present, make sure the authorId is a valid ObjectI in the author collection. A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present.
        let y=await newAuthorModel.find({_id:req.body['author']})
        if(y.length>0){
            //The publisherId is present in the request body. If absent send an error message that this detail is required
            if(x.includes('publisher')){
                let z=await newPublisherModel.find({_id:req.body['publisher']})
                if(z.length>0){
                    let finalBook=await newBookModel.create(data)
                    res.send({msg:finalBook})
                }else{
                    res.send({error:'publisher not present'})
                }

            }
            else{
                res.send({error:'publisher feild is required'})
            }
        
        }else{
            res.send({error:'author not present'})
        }
    
    }
    
    

}
module.exports.createNewBook=createNewBook

const getAllbooks=async function(req,res){
    let authBooks=await newBookModel.find().populate('author').populate('publisher')
    res.send({msg:authBooks})
}
module.exports.getAllbooks=getAllbooks

const books=async function(req,res){
    let authbook=await newBookModel.find().populate('author').populate('publisher')
    let y=[]
    let e=[]
    authbook.forEach((x)=>{
        if((x['publisher']['name']=="Penguin" ) || (x['publisher']['name']=="HarperCollins") ){
            y.push(x['name'])
        }
    })
        authbook.forEach((x)=>{
            if(x['author']['rating']>3.5){
                console.log(x['author']['rating'])
                e.push(x['name'])
            }  
        
    })
    console.log(e)
   let m=await newBookModel.updateMany({name:{$in:y}},{$set:{isHardCover:true}},{new:true})
   let k=await newBookModel.updateMany({name:{$in:e}},{$inc:{"price":10}},{new:true})
   let z=await newBookModel.find() 
   res.send({res:z})
 }
module.exports.books=books