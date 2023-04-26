//import express function 
const express = require('express')
const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')
const bodyParser = require('body-parser')

//create application by calling express function
const app = express()
const userRouter = require('./routers/user.router')
const customerRouter = require('./routers/customer.router')

//middleware : Logger middleware
const myLogger = (req, res, next) => {
    console.log('Logged')
    next()
}
const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}
//registering middleware
app.use(myLogger)
app.use(requestTime)

//logger middleware
//app.use(morgan('combined')) //console 

//write logs into files
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


//body parser middleware configuration
// parse application/json
app.use(bodyParser.json())

//configure routers with map application
app.use('/api/users', userRouter)
app.use('/api/customers', customerRouter)



//home page 
app.get("/", (req, res) => {
    res.end('Home')
})
app.get("/requesttime", (req, res) => {
    let response = 'Welcome to Express<br>'
    response += `<small>Requested at: ${req.requestTime} </small>`
    res.end(response)
})
//end points for customers
app.get('/api/customers', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Subramanian M' }])
})


//start web container
app.listen(3000, () => {
    console.log('Express Server is runing')
})