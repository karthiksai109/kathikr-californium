const express = require('express');
const router = express.Router();
const authmid=require('../middlewares/auth')
const userController= require("../controllers/userController")
const p=require('../models/practiceModel')
//const p=require('../models/practiceModel')
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/users", userController.createUser  )

router.post("/logins", userController.loginUser)
router.post('/practice',async function(req,res){
    let data=req.body
let a=await p.create(data)
res.send({msg:a})
})

router.get('/practice',async function(req,res){
    //let data=req.body
let a=await p.findOne().populate({path:'stories',select:'firstName'})
res.send({msg:a})
})

//The userId is sent by front end
//router.get("/users/:userId", userController.getUserData)
router.get("/users/:userId",authmid.mid1, userController.getUserData)
// router.put("/users/:userId", userController.updateUser)
router.put("/users/:userId",authmid.mid1, userController.updateUser)
router.delete("/users/:userId",authmid.mid1, userController.delUser)
module.exports = router;