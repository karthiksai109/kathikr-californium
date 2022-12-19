const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


const bookmod=require('../models/bookModel');
const bookModel = require('../models/bookModel');
const AuthorBook=require("../controllers/AuthorBookController")

/*1. Write down the schemas for book and authors (keeping the data given below in mind). Also create the documents (corresponding to the data given below) in your database.
2. CRUD operations. Write API's to do the following:
Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)
List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)
*/
router.post('/author',AuthorBook.author)

router.post('/Books',AuthorBook.Books)

router.get("/booksChetanBhagat",AuthorBook.booksChetanBhagat)



router.get("/twoStates",AuthorBook.twoStates)
router.get('/booksrange',AuthorBook.bookRange)
    
    // res.send(Authid)
    // let BookName= await BookModel1.find({author_id:{$eq:Ar}}).select({_id:0,name:1})
    // res.send({msg:BookName})
















// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })





module.exports = router;