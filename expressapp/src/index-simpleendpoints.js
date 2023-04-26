//import express function 
const express = require('express')

//create application by calling express function
const app = express()

//home page 
app.get("/", (req, res) => {
    res.end('Home')
})
//end points for users 
app.get('/api/users', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Subramanian' }])
})

//end points for customers
app.get('/api/customers', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Subramanian M' }])
})


//start web container
app.listen(3000, () => {
    console.log('Express Server is runing')
})