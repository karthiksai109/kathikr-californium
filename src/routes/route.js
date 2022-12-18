const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
//const BookModel=require('../models/bookModel1');
//const bookModel1 = require('../models/bookModel1');
const book2=require('../controllers/bookcollectionController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)


//createBook : to create a new entry..use this api to create 11+ entries in your collection
router.post('/createBooks',book2.Creates)

//bookList : gives all the books- their bookName and authorName only
router.get('/bookList',book2.bookList)

//getBooksInYear: takes year as input in post request and gives list of all books published that year
router.post('/getBooksInYear',book2.booksInAYear)

/*getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition 	
e.g if body had { name: “hi”} then you would fetch the books with this name
if body had { year: 2020} then you would fetch the books with this name
hence the condition will differ based on what you input in the request body
*/

router.post('/getParticularBooks',book2.getParticularBook)
//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”

router.get('/getXINRBooks',book2.getInr)

//getRandomBooks - returns books that are available in stock or have more than 500 pages 

router.get('/getRandomBooks',book2.random)

module.exports = router;