//onst { Next } = require("react-bootstrap/esm/PageItem")

const mid1=function(req,res,next){
    let aut1=req.headers['x-auth-token']
    if(aut1==undefined){
        return res.send({status:false,msg:"required token"})
    }else{
     next()
    }

}
module.exports.mid1=mid1