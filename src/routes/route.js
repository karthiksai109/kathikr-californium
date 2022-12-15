const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel=require("../models/bookModel")
const BookControler=require("../controllers/bookController")


//bookSchema
router.post('/createbook-details',BookControler.bookCreate )

router.get('/generatebook-details',BookControler.bookGenerate )



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;