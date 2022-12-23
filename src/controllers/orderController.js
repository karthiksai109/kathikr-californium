const productM=require("../models/productModel")
const { findOne, find } = require("../models/userModel")
const UserM=require('../models/Usersmodel')
const orderx=require('../models/orderModel')

const products=async function(req,res){
    let data=req.body
    let a=await productM.create(data)
    res.send({msg:a})
}
module.exports.products=products

const usere=async function(req,res){
    let data1=req.body
    let a1=await UserM.create(data1)
    res.send({msg:a1})
}
module.exports.usere=usere
const ordere=async function(req,res){
    let x=await UserM.findById(req.body['userId']).select({_id:0,balance:1})
    let y=await productM.findById(req.body['productId']).select({_id:0,price:1})
    console.log(x['balance'])
    console.log(y['price'])

    // res.send({l:x})
    let m=req.body['isFreeAppUser']
    let q=x['balance']-y['price']
    console.log(m)
    if(m===true){
        let g=req.body
        g['amount']=0
        let z=await orderx.create(g)
        res.send({msg:z})

    }else{
    
    if(x && y){
        
            if(q>0){
                let a=await UserM.updateOne({m:true},{balance:q})
                let {userId,productId,amount,isFreeAppUser,date}=req.body
                amount=y['price']
                let actual={userId,productId,amount,isFreeAppUser,date}
                let z=await orderx.create(actual)
            res.send({msg:z})
        
        }else{
            res.send({error:'insuffecient balance'})
            }
    
}else{
    res.send({msg:'enter valid ids'})
}
}}
    


module.exports.ordere=ordere


