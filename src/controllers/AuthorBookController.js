const AuthorModel1=require('../models/AuthorsModel')
const BookModel1=require('../models/BooksModel')
const author=async function(req,res){
    let data=req.body
    let AllAuthors=await AuthorModel1.create(data)
    res.send({msg:AllAuthors})
}
module.exports.author=author
const Books=async function(req,res){
    let data=req.body
    let AllBooks=await BookModel1.create(data)
    res.send({msg:AllBooks})
}
module.exports.Books=Books

const booksChetanBhagat =async function(req,res){
    let Authid=await AuthorModel1.find({author_name:{$eq:"Chetan Bhagat"}}).select({author_id:1,_id:0})
    let Ar=Authid[0]['author_id']
    console.log(Ar)
    // res.send(Authid)
    let BookName= await BookModel1.find({author_id:{$eq:Ar}}).select({_id:0,name:1})
    res.send({msg:BookName})
}
module.exports.booksChetanBhagat=booksChetanBhagat

const twoStates=async function(req,res){
    let reqiredBook=await BookModel1.findOneAndUpdate({name:{$eq:"Two states"}},{$set:{price:100}},{new:true}).select({author_id:1,price:1,_id:0})
    let v2=reqiredBook['author_id']
    
    let reqiredName=await AuthorModel1.findOne({author_id:{$eq:v2}}).select({_id:0,author_name:1})
    let price=reqiredBook['price']
    let authorname=reqiredName['author_name']

    res.send({msg:{price,authorname}})
    }
module.exports.twoStates=twoStates

const bookRange=async function(req,res){
    let a=await BookModel1.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    // res.send(a)
    let ar=[]
    for(let i=0;i<a.length;i++){
        if(!ar.includes(a[i]['author_id']))
     ar.push(a[i]['author_id'])
    }
    console.log(ar)
    let resul=[]
    let b=await AuthorModel1.find().select({_id:0,author_id:1,author_name:1})
    b.forEach((x)=>{
        if(ar.includes(x['author_id'])){
            resul.push(x['author_name'])
        }
    })
   
    res.send({authors:resul})
}
module.exports.bookRange=bookRange