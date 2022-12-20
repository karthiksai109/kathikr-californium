const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel=require("../models/bookModel")
const BookControler=require("../controllers/bookController")
const customCatController=require("../controllers/customCatController")

//generating Customer Data
router.post('/Customer',customCatController.preCustom)

//generating aauto_increment for customer_Id
router.post('/Cat',customCatController.preCad)
//getCustomer
router.get('/CustomerAPI',customCatController.getCustomAPI)
//postCustomer
router.post('/CustomerAPI',customCatController.postCustomAPI)
//Delete == Flagging of document intead of removing that completely from my db
router.get('/CustomerAPID',customCatController.flagCustomAPI)


//getallCards
router.get('/CardsAPI',customCatController.getCardAPI)

//postNewCard
router.post('/CardsAPI',customCatController.preCad)

module.exports = router;