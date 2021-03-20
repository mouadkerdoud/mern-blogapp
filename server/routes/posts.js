const express = require("express")
const router = express.Router()

//Controllers
const postsController = require("../controllers/posts") 


router.get("/", postsController.getPosts)


module.exports = router