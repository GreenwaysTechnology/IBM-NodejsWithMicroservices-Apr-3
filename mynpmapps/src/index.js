const http = require('http')


const server = http.createServer((req, res) => {
    //request and response processing logic
    res.end('hai node how are you!')
})

//start the server 
server.listen(3000, () => {
    console.log('HTTP server is running')
})