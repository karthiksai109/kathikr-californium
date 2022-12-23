const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const orderC=require('../controllers/orderController')
const orderM=require('../middlewares/orderMiddleware')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/products',orderC.products )
//router.get('/products',orderC.products )

router.post('/users',orderM.usermid,orderC.usere )
router.post('/orders',orderM.usermid,orderC.ordere)

router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

module.exports = router;