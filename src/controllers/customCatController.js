const kCustomModel=require("../models/karcustom")
const kCatModel=require("../models/karCart")
const CountModel=require('../models/counterModel')

const preCustom=async function(req,res){
    let data=req.body
    let a=await kCustomModel.create(data)
    res.send({msg:a})
}
module.exports.preCustom=preCustom

const preCad=async function(req,res){
    let x=await CountModel.findOneAndUpdate(
        {"id":"kar"},
        {"$inc":{"seq":1}},
        {new:true,upsert:true})
    
    let data=req.body
    let {cardNumber,cardType,customerName,status,vision,customerId}=data
    // console.log(cardNumber)
    
    cardNumber='C00'+x['seq']
    let z={cardNumber,cardType,customerName,status,vision,customerId}
    let a=await kCatModel.create(z)

    
    res.send({msg:a})
}
module.exports.preCad=preCad

const getCustomAPI=async function(req,res){
    let reqCustomers=await kCustomModel.find({status:{$eq:"ACTIVE"}})
    res.send({msg:reqCustomers})
}
module.exports.getCustomAPI=getCustomAPI
const postCustomAPI=async function(req,res){
    let createData=req.body
    let updatedData=await kCustomModel.create(createData)
    res.send({msg:updatedData})
}
module.exports.postCustomAPI=postCustomAPI

const flagCustomAPI=async function(req,res){
    let updatedData=await kCustomModel.findOneAndUpdate({"firstName":"Keerthi"},{$set:{isDeleted:true}},{new:true})
    res.send({msg:updatedData})
}
module.exports.flagCustomAPI=flagCustomAPI


const getCardAPI=async function(req,res){
    let reqCard=await kCatModel.find()
    res.send({msg:reqCard})
}
module.exports.getCardAPI=getCardAPI




