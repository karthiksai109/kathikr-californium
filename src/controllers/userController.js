const jwt = require("jsonwebtoken");
const { find, findOneAndUpdate } = require("../models/userModel");
const userModel = require("../models/userModel");
const mongoose=require('mongoose');
const e = require("express");

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
  let data=req.body
  let data1=Object.keys(data)
  //console.log(data1)
  if(data1.length>0){
    if(data1.length==2){
    if(data1.includes("emailId") && data1.includes("password")){
  let b= await userModel.findOne(data)
  //console.log(b)
  if(b!=null){
    
    let token=jwt.sign({userId:b["_id"]},"functionup-karthik")
    //res.setHeader('x-auth-token',token)
    return res.status(200).send({status:true,data:token})
  }
  else{
    return res.status(401).send({status:false,data:'authonitication failed'})
  }
}else{
  return res.status(401).send({status:false,data:'authonitication failed'})
  }
}else{
  return res.status(400).send({status:false,data:'invalid data'})
}
}else{
  return res.status(400).send({status:false,data:'enter data'})
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
  if(upd!=null){
    res.status(200).send({status:true,data:upd})
  }else{
    res.status(403).send({status:false,msg:'authorization failed'})
  }
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
    if(upd!=null){
    res.status(200).send({status:true,data:upd})
    }else{
      res.status(403).send({status:false,msg:'authorization failed'})
    }
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