//expose user end point : GET,POST,DELETE,UPDATE...
const express = require('express')
//create RouterObject by calling express
const customerRouter = express.Router()

//end points for users 
customerRouter.get('/', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Subramanian' },{ id: 2, name: 'Murugan' }])
})

module.exports = customerRouter