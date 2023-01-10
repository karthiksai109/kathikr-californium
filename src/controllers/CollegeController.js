const e = require("express");
const mongoose = require("mongoose");
const { find, findOne } = require("../Models/CollegeModel");
const collegeModel = require("../Models/CollegeModel");
const InternModel=require("../Models/InternModel")


// const validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

 
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




//------------------------------------------------------create collegeData--------------------------------------------
const createCollegeData = async function (req, res) {
    try{
  let data = req.body;
  let { name, fullName, logoLink } = data;
  if (!data || data == {}) {
    res
      .status(400)
      .send({ status: false, msg: "plese enter some data in order to create" });
  } else if (name == undefined || name == "") {
    res
      .status(400)
      .send({ status: false, msg: "plese enter the name of your college" });
  }else if(!isValidName(name)){
    res.status(400)
    .send({ status: false, msg: "plese enter a valid name of your college" });
  
    } else if (fullName == undefined || fullName == "") {
    res
      .status(400)
      .send({ status: false, msg: "plese enter the fullName of your college" });
    }else if(!isValidFullName(fullName)){
       
        res.status(400)
        .send({ status: false, msg: "plese enter a valid fullname of your college" });
      
        
    } else if (logoLink == undefined || logoLink == "") {
    res.status(400).send({ status: false, msg: "plese enter logoLink" });

    }else if(!urlreg.test(logoLink)){
        res.status(400).send({ status: false, msg: "plese enter valid logoLink" });
    
  } else {
    let collegeData = await collegeModel.create(data);
    res
      .status(201)
      .send({
        status: true,
        msg: "your data is successfully created",
        data: collegeData,
      });
  }
}
catch(err){
    res.status(500).send({status:false,err:err.message})
}
};

module.exports.createCollegeData=createCollegeData

//-------------------------------------------------------------------------------------End------------------------------------
