const bookModel1=require('../models/bookModel1')
const Creates=async function(req,res){
    let CreateBooks=req.body
    let RequiredBooks=await bookModel1.create(CreateBooks)
    res.send({msg: RequiredBooks})
}
module.exports.Creates=Creates

const bookList=async function(req,res){
    // let CreateBooks=req.body
    // let RequiredBooks=bookModel1.create(CreateBooks)
    let bookLists=await bookModel1.find().select({bookName:1, authorName:1,_id:0})
    res.send({msg: bookLists})
}
module.exports.bookList=bookList

const booksInAYear=async function(req,res){
    let reqYear=req.body.year
    let getBooks=await bookModel1.find({year:{$eq:reqYear} })
    res.send({msg: getBooks})

}
module.exports.booksInAYear=booksInAYear

const getParticularBook= async function(req,res){
    let x=Object.keys(req.body)
    let y=x.join('')
    let getParticular=await bookModel1.find()
    let resarr=[]
    getParticular.forEach((z,i,a)=>{
        if(a[i][y]==req.body[y]){
            resarr.push(a[i])
        }

    })
    res.send({msg: resarr})

}
module.exports.getParticularBook=getParticularBook


const getInr =async function(req,res){
    let getINR=await bookModel1.find({$or:[{"prices.indianPrice":'Rs 100'},{"prices.indianPrice":'Rs 300'},{"prices.indianPrice":'Rs 500'}]})
    res.send({msg : getINR})
    
    }
    module.exports.getInr=getInr

const random=async function(req,res){
    let getRandom=await bookModel1.find({$or:[{ stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg : getRandom})
    
    }
    module.exports.random=random