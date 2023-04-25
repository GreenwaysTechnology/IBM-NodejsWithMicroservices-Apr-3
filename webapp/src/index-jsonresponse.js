//create webserver and app and deploy
const http = require('node:http')


//create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })
    const data = [{ id: 1, name: 'Subramanian' }]
    res.end(JSON.stringify(data)) //write and close the connection
})

//start server
server.listen(3000, () => {
    console.log('Node HTTP Webserver is ready to accept Connection')
})

