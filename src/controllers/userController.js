const jwt = require("jsonwebtoken");
const { find, findOneAndUpdate } = require("../models/userModel");
const userModel = require("../models/userModel");
const mongoose=require('mongoose')

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
//
const createUser=async function(req,res){
  let data=req.body
  try{
    let data1 =Object.keys(data)
    if(data1.length>0){
    let a=await userModel.create(data)
    res.status(201).send({status:true,data:data})
    }else{
      res.status(400).send({status:false,msg:'enter data'})
    }
  }
  catch(err){
    res.status(500).send({msg:err.message})
  }
}

const loginUser=async function(req,res){
  try{
  let data1=req.body
  let b= await userModel.findOne(data1)
  if(b!=null){
    let x=b
    let token=jwt.sign({userId:b["_id"]},"functionup-karthik")
    return res.status(200).send({status:true,data:token})
  }else{
    return res.status(404).send({status:false,data:'inavalid user'})
  }
}
catch(err){
  res.status(500).send({msg:err.message})
}
}

const getUserData=async function(req,res){
  // let aut=req.headers['x-auth-token']
  // if(aut==undefined){
  //   return res.send({status:false,msg:"required token"})
  // }else{
    // let aut=req.headers['x-auth-token']
    // let tokenv=jwt.verify(aut,"functionup-karthik")
    try{
    let data3=mongoose.Types.ObjectId(req.params['userId'])
    let k=await userModel.findById(data3)
    if(k!=null){
      return res.status(200).send({status:true,data:k})
    }else{
      console.log(k)
      return res.status(403).send({status:false,msg:'invalid userId'})
      
    }
  }
  catch(err){
    res.status(500).send({msg:err.message})
  }

  }
//}

const updateUser=async function(req,res){

  // let aut=req.headers['x-auth-token']
  // if(aut==undefined){
  //   return res.send({status:false,msg:"required token"})
  // }else{
    try{
    let aut=req.headers['x-auth-token']
    let data4=mongoose.Types.ObjectId(req.params['userId'])
    let upd=await userModel.findOneAndUpdate({_id:data4},{firstName:'KarthiKSai'},{new:true})
    res.status(201).send({status:true,data:upd})
  }
catch(err){
    res.status(500).send({msg:err.message})
  }
}
// }


const delUser=async function(req,res){

  // let aut=req.headers['x-auth-token']
  // if(aut==undefined){
  //   return res.send({status:false,msg:"required token"})
  // }else{
    try{
    let aut=req.headers['x-auth-token']
    let data4=mongoose.Types.ObjectId(req.params['userId'])
    let upd=await userModel.findOneAndUpdate({_id:data4},{isDeleted:true},{new:true})
    res.status(201).send({status:true,data:upd})
    }
    catch{
      res.status(500).send({msg:err.message})
    }
  }


// }


module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.delUser=delUser