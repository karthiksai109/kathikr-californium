const e = require("express");
const mongoose = require("mongoose");
const { find, findOne } = require("../Models/CollegeModel");
const collegeModel = require("../Models/CollegeModel");
const InternModel=require("../Models/InternModel")


const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

 
const isValidName = function (name) {
    const fnameRegex = /^[A-Za-z]+$/ ;
    return fnameRegex.test(name.trim());
    
};
const isValidFullName = function (fullname) {
    let x=fullname.split('')
    x.forEach((y,i)=>{
        if(y==" "){
            x.splice(i,1)
        }
    })
    let reName=x.join('')
    const fnameRegex = /^[A-Za-z]+$/ ;
    return fnameRegex.test(reName.trim());
    
}




let urlreg = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i


//-------------------------------------------------------------------------------------create InternData----------------------------------
const createIntern = async function (req, res) {
    try{
    let data = req.body;
    let { name, mobile, email, collegeName } = data;
    //console.log(!data)

    if (Object.keys(data)==0) {
        
      return res
        .status(400)
        .send({ status: false, msg: "plese enter some data in order to create" });
    } else if (name == undefined || name == "") {
      res
        .status(400)
        .send({ status: false, msg: "plese enter your name" });
    }else if(!isValidName(name)){
        
        res.status(400)
        .send({ status: false, msg: "plese enter your name" });
      
        
    
    } else if(mobile==undefined || mobile ==""){
        res
        .status(400)
        .send({ status: false, msg: "plese enter your mobieNumber" })
    }else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)) {
        return res.status(400).send({ status:false, message:"Enter valid mobile number" })
    
    }else if(email==undefined || email==""){
        res
        .status(400)
        .send({ status: false, msg: "plese enter your emailId" })
    
    }else if(!validateEmail(email)){
        res
        .status(400)
        .send({ status: false, msg: "plese enter valid emailId" })

    
    
    }else if (collegeName == undefined || collegeName == "") {
      res
        .status(400)
        .send({ status: false, msg: "plese enter of your collegeName" });
    }else if(!isValidName(collegeName)){
       
        res.status(400)
        .send({ status: false, msg: "plese enter a valid fullname of your college" });
      
        
    
    } else {
        let collegeFilter=await collegeModel.findOne({$or:[{"name":{$eq:collegeName}},{"fullName":{$eq:collegeName}}]})
        console.log(collegeFilter)
        if(collegeFilter==null){
            res.status(404).send({status:false,msg:`sorry we cant find ${collegeName} `})
        }else{
        data["collegeName"]=undefined
        data["collegeId"]=collegeFilter["_id"]
      let collegeData = await InternModel.create(data);
      res
        .status(201)
        .send({
          status:true,
          msg: "your data is successfully created",
          data: collegeData,
        
        });
    }
    }
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}
  };


//------------------------------------------getDetails----------------------------
const getDetails= async function(req,res){
try{
    let data=req.query["collegeName"]
    if(!data){
        return res.status(400).send({status:false,msg:`plese enter collegeName `})
    }
    console.log(data)
    let getData=await collegeModel.findOne({name:{$eq:data},isDeleted:false})
   

    if(!getData){
        res.status(404).send({status:false,msg:`sorry no collage data found with this collegeName `})
    }
    else{
        let intern=await InternModel.find({"collegeId":{$eq:getData["_id"]}})
    
        getData["_id"]=undefined
        if(intern.length==0){
            getData["interns"]="no interns for this college"
        }
        else{
        getData["interns"]=intern
        }
        console.log(getData["interns"])
        let {name,fullName,logoLink,interns}=getData
        let resObject={name,fullName,logoLink,interns}
        res.status(200).send({status:true,msg:"here is your filtered data",data:resObject})

    }
}
catch(err){
    res.status(500).send({status:false,error:err.message})
}
}





module.exports.getDetails=getDetails
module.exports.createIntern=createIntern
