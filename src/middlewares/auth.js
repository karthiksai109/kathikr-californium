//onst { Next } = require("react-bootstrap/esm/PageItem")
const express = require('express');
const jwt = require("jsonwebtoken");
const mongoose=require('mongoose')


const mid1=function(req,res,next){
    try{
        let aut=req.headers['x-auth-token']
        let tokenv=jwt.verify(aut,"functionup-karthik")
   
if(tokenv){
    if(aut==undefined){
        return res.status(400).send({status:false,msg:"required token"})
    }else{
    //let aut=req.headers['x-auth-token']
    let data3=req.params['userId']
    if(data3==undefined){
        return res.status(400).send({status:false,msg:"required token"})
    }
    
    else if(tokenv.userId==data3){
        next()

    }else{
        return res.status(404).send({status:false,msg:"requested id failded"})
    }
    
    //let k=await userModel.findById(data3)
    }
    
    }

}

catch(err){
res.status(500).send({msg:false,error:err.message})
}
}
module.exports.mid1=mid1