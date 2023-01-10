// const e = require("express");
// const mongoose = require("mongoose");
// const { find, findOne } = require("../Models/CollegeModel");
const collegeModel = require("../Models/CollegeModel");
const InternModel=require("../Models/InternModel")


const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email.trim())
};

const isValideName = function (name) {
    const fnameRegex = /^[A-Za-z]+$/ ;
    return fnameRegex.test(name);
    
};

 
const isValidName = function (name) {
    const fnameRegex = /^[A-Za-z]+$/ ;
    return fnameRegex.test(name.trim());
    
};




//-------------------------------------------------------------------------------------create InternData----------------------------------
const createIntern = async function (req, res) {
    try{
    let data = req.body;
    let { name, mobile, email, collegeName } = data;
    let fitermobile=await InternModel.findOne({$or:[{"mobile":mobile },{"email":email}]})
        
    if (Object.keys(data).length==0) {
        
      return res
        .status(400)
        .send({ status: false, msg: "plese enter some data in order to create" });
    } else if (name == undefined || name.trim() == "") {
      res
        .status(400)
        .send({ status: false, msg: "plese enter your name" });
    }else if(!isValidName(name)){
        
        res.status(400)
        .send({ status: false, msg: "plese enter valid name" });
      
        
    
    } else if(mobile==undefined || mobile.trim() ==""){
        res
        .status(400)
        .send({ status: false, msg: "plese enter your mobieNumber" })
    }else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile.trim())) {
        return res.status(400).send({ status:false, message:"Enter valid mobile number" })
    
    }else if(fitermobile && fitermobile["mobile"]==mobile){
        return res.status(400).send({ status:false, message:" mobile number already registered" })

    }else if(email==undefined || email.trim()==""){
       return res
        .status(400)
        .send({ status: false, msg: "plese enter your emailId" })
    
    }else if(!validateEmail(email)){
       return res
        .status(400)
        .send({ status: false, msg: "plese enter valid emailId" })

    }else if(fitermobile && fitermobile["email"]==email){
       return res
        .status(400)
        .send({ status: false, msg: " emailId already registered" })

    
    }else if (collegeName == undefined || collegeName.trim() == "") {
      return res
        .status(400)
        .send({ status: false, msg: "plese enter of your collegeName" });
    }else if(!isValidName(collegeName)){
       
       return  res.status(400)
        .send({ status: false, msg: "plese enter a valid name of your college" });
      
        
    
    } else {
        name
        let collegeFilter=await collegeModel.findOne({"name":collegeName})
        console.log(collegeFilter)
        if(collegeFilter==null){
            res.status(404).send({status:false,msg:`sorry we cant find college with ${collegeName} `})
        }else{
        data["collegeName"]=undefined
        data["collegeId"]=collegeFilter["_id"]
      let collegeData = await InternModel.create(data);
     return res
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
    if(!isValideName(data)){
        return res.status(400).send({status:false,msg:`college name should only consist of alphabets`})
    }
    if(!data){
        return res.status(400).send({status:false,msg:`plese enter collegeName  `})
    }
    console.log(data)
    let getData=await collegeModel.findOne({name:{$eq:data},isDeleted:false})
   

    if(!getData){
        res.status(404).send({status:false,msg:`sorry no collage data found with this collegeName `})
    }
    else{
        let intern=await InternModel.find({"collegeId":{$eq:getData["_id"]},isDeleted:false}).select({name:1,email:1,mobile:1})
    
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
