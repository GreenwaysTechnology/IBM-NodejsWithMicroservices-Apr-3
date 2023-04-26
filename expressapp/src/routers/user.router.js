//expose user end point : GET,POST,DELETE,UPDATE...
const express = require('express')
//use service apis 
const { findAll, save, findById } = require('../services/user.service')
//create RouterObject by calling express
const userRouter = express.Router()

//userRouterMiddleware 
userRouter.use((req, res, next) => {
    console.log(` User Middleware => ${req.method} ${req.url}`)
    next()
})

//end points for users 
userRouter.get('/', async (req, res) => {
    try {
        const users = await findAll()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(401).json({ err: err })
    }
})
userRouter.post('/save', async (req, res) => {
    try {
        //without middleware 
        // let data = ''
        // req.on('data', (chunk) => {
        //     data += chunk
        // })
        // req.on('end', async () => {
        //     const status = await save(data)
        //     res.status(201).json(status)
        // })
        const data = req.body
        const status = await save(data)
        res.status(201).json(status)
    }
    catch (err) {
        res.status(400).json({ err: err })
    }
})

//parameters dynamic url 
userRouter.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.params)
        const result = await findById(id)
        res.status(200).json({ id: result })
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

//update,remove

module.exports = userRouter