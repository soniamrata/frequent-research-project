const express = require('express');
const router = express.Router()
const {createUser,getUser} = require("../controllers/userController.js")

// --------- routes for register user------------//
router.post("/register" , createUser)
// --------- route for get user details----------//
router.get("/fetch",getUser)

module.exports = router