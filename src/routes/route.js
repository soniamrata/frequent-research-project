const express = require('express');
const router = express.Router()
const {createUser,getUser} = require("../controllers/userController.js")

router.post("/register" , createUser)
router.get("/fetch",getUser)

module.exports = router