const productM=require("../models/productModel")
const UserM=require('../models/Usersmodel')

const usermid=async function(req,res,next){
    let x=Object.keys(req.headers)
    //console.log(x)
    if(x.includes('isfreeappuser')==true){
       req.body['isFreeAppUser']=req.headers['isfreeappuser']
        next()
    }else{
        res.send({error:"missing a mandatory header"})
    }
}
module.exports.usermid=usermid

// const ordermid=async function(req,res,next){
//     let y=Object.keys(req.headers)
//     //console.log(x)
//     if(y.includes('isfreeappuser')==true){
//        req.body['isFreeAppUser']=req.headers['isfreeappuser']
//         next()
//     }else{
//         res.send({error:"missing a mandatory header"})
//     }
// }
//module.exports.ordermid=ordermid