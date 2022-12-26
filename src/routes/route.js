const express = require('express');
const router = express.Router();
const authmid=require('../middlewares/auth')
const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/users", userController.createUser  )

router.post("/logins", userController.loginUser)

//The userId is sent by front end
//router.get("/users/:userId", userController.getUserData)
router.get("/users/:userId",authmid.mid1, userController.getUserData)
// router.put("/users/:userId", userController.updateUser)
router.put("/users/:userId",authmid.mid1, userController.updateUser)
router.delete("/users/:userId",authmid.mid1, userController.delUser)
module.exports = router;