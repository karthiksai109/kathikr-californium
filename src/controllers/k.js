const CollegeModel = require("../Models/CollegeModel")
const InternModel = require("../Models/InternModel")

const getIntern=async function(req,res){
    let data=req.query["collegeName"]
    let filterData=await CollegeModel.findOne({isDeleted:false,"name":data})
    let filterIntern=await InternModel.find({isDeleted:false,"collegeId":filterData["_id"]}).select({name:1,email:1,mobile:1})
    let {name,fullName,logoLink}=filterData
    let result={name,fullName,logoLink}
    result["interns"]=filterIntern
    res.status(200).send({status:true,msg:"here is your filtered data",data:result})
}