function blockMe(message) {
    console.log(message)
}
//promise with biz logic 
function login(userName, password) {

    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

//main method
function main() {
    blockMe('start')
    login('admin', 'admin').then(status => console.log(status)).catch(err => console.log(err))
    login('bar', 'foo').then(status => console.log(status)).catch(err => console.log(err))
    blockMe('end')
}
main()