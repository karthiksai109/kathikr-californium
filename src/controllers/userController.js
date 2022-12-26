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
  let a=await userModel.create(data)
  res.send({msg:data})
}

const loginUser=async function(req,res){
  let data1=req.body
  let b= await userModel.find(data1)
  if(b.length>0){
    let token=jwt.sign({userId:b["id"]},"functionup-karthik")
  return res.send({status:true,data:token})
  }else{
    return res.send({status:false,data:'inavalid user'})
  }
 
}

const getUserData=async function(req,res){
  // let aut=req.headers['x-auth-token']
  // if(aut==undefined){
  //   return res.send({status:false,msg:"required token"})
  // }else{
    let aut=req.headers['x-auth-token']
    let tokenv=jwt.verify(aut,"functionup-karthik")
    let data3=mongoose.Types.ObjectId(req.params['userId'])
    let k=await userModel.findById(data3)
    if(k!=null){
      return res.send({status:true,data:k})
    }else{
      console.log(k)
      return res.send({status:false,msg:'invalid userId'})
      
    }
   

  }
//}

const updateUser=async function(req,res){

  // let aut=req.headers['x-auth-token']
  // if(aut==undefined){
  //   return res.send({status:false,msg:"required token"})
  // }else{
    let aut=req.headers['x-auth-token']
    let data4=mongoose.Types.ObjectId(req.params['userId'])
    let upd=await userModel.findOneAndUpdate({_id:data4},{firstName:'KarthiKSai'},{new:true})
    res.send({status:true,data:upd})
  }

// }


const delUser=async function(req,res){

  // let aut=req.headers['x-auth-token']
  // if(aut==undefined){
  //   return res.send({status:false,msg:"required token"})
  // }else{
    let aut=req.headers['x-auth-token']
    let data4=mongoose.Types.ObjectId(req.params['userId'])
    let upd=await userModel.findOneAndUpdate({_id:data4},{isDeleted:true},{new:true})
    res.send({status:true,data:upd})
  }

// }


module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.delUser=delUser