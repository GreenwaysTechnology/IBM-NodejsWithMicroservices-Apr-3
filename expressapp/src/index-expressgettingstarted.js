//import express function 
const express = require('express')

//create application by calling express function
const app = express()

//home page 
app.get("/", (req, res) => {
    res.end('Home')
})


//start web container
app.listen(3000, () => {
    console.log('Express Server is runing')
})