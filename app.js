const express = require("express")
const bodyParser = require("body-parser")
const CONFIG = require("./config/config")

const app = express()

//Middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json)


app.get("/", (req, res) => {
    res.send("Hello Bloggers")
})

app.listen(CONFIG.PORT, () => {
    console.log(`Server Started on http://localhost:${CONFIG.PORT}`)
})