const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const bookPublisherController=require('../controllers/bookPublishController')
const { find } = require('../models/authorModel');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



//1. Write a POST api that creates an author from the details in request body
router.post('/createNewAuthor',bookPublisherController.createNewAuthor)
//2. Write a POST api that creates a publisher from the details in the request body

router.post('/createNewPublisher',bookPublisherController.createNewPublisher)

//3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
router.post('/createNewBook',bookPublisherController.createNewBook)


//4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

router.get('/getAllbooks',bookPublisherController.getAllbooks)


//5.Create a new PUT api /books and perform the following two operations
 //a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

 router.put('/books',bookPublisherController.books)

module.exports = router;