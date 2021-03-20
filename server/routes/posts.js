const express = require("express")
const router = express.Router()

//Controllers
const postsController = require("../controllers/posts") 



//Routes
router.get("/", postsController.getPosts)
router.get("/", postsController.createPost)


module.exports = router