const fs = require('node:fs')

//read file 
const filePath = './src/assets/info.txt'
const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
blockMe('start')
const data = fs.readFileSync(filePath, options)
console.log(data)
blockMe('end')