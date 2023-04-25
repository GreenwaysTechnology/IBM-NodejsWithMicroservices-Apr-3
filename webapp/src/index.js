
const http = require('node:http')
const server = http.createServer(async (req, res) => {
    //read data
    //'data' is event emitted by kernal 
    let data = ''
    req.on('data', chunk => {
        //this code to be called for each chunk
        //console.log(`${chunk}`)
        data += chunk
    })
    //which is called once all the chunks are processed
    req.on('end', () => {
        console.log(data)
        res.end(data)
    })
   
})

//start server
server.listen(3000, () => {
    console.log('Node HTTP Webserver is ready to accept Connection')
})

