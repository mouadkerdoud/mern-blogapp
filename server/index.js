const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")


 //Express app
 const app = express()

 //General config
 app.use(bodyParser.json({limit: "30mb", extended: true}))
 app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
 app.use(cors())

 //Database
 const CONNECTION_URL = "mongodb+srv://duodrek:imsopure123@cluster0.fh59a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 const PORT = process.env.PORT || 5000;

 mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`)) )
    .catch(error => console.log(error.message) )

mongoose.set("useFindAndModify", false)