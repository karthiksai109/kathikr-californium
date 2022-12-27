//onst { Next } = require("react-bootstrap/esm/PageItem")
const express = require('express');
const jwt = require("jsonwebtoken");
const mongoose=require('mongoose')


const mid1=function(req,res,next){
    let aut1=req.headers['x-auth-token']
    if(aut1==undefined){
        return res.send({status:false,msg:"required token"})
    }else{
    let aut=req.headers['x-auth-token']
    let tokenv=jwt.verify(aut,"functionup-karthik")
    let data3=req.params['userId']
    if(tokenv.userId==data3){
        next()

    }else{
        return res.send({status:false,msg:"requested id failded"})
    }
    
    //let k=await userModel.findById(data3)

    
    }

}
module.exports.mid1=mid1