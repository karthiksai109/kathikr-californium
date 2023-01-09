const express= require('express')
const collegeController=require('../controllers/collegeController')
const internController=require('../controllers/InternController')
const router=express.Router()


router.post('/functionup/colleges',collegeController.createCollegeData)
router.post('/functionup/interns',internController.createIntern)
router.get('/functionup/collegeDetails',internController.getDetails)

router.all('/*',function(req,res){
    res.status(400).send({msg:"invalid request"})
})
module.exports=router