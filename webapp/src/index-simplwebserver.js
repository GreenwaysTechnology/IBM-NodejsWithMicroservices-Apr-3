//create webserver and app and deploy
const http = require('node:http')


//create server
const server = http.createServer((req, res) => {
    //read request and send response
    res.end('Hello Node')
})

//start server
server.listen(3000, () => {
    console.log('Node HTTP Webserver is ready to accept Connection')
})

