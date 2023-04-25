//create webserver and app and deploy
const http = require('node:http')
const { findAll } = require('./services/user.service')
//create server
const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })
    try {
        const users = await findAll()
        res.end(users)
    }
    catch (err) {
        res.end({ err })
    }
})

//start server
server.listen(3000, () => {
    console.log('Node HTTP Webserver is ready to accept Connection')
})

