//promise factory apis

function blockMe(message) {
    console.log(message)
}
function getUser() {
    //By default promise is non blocking which has implmented timer with 0ms
    return Promise.resolve({ id: 1, name: 'subramanian' })//success->Promise Object
}
//failure
function getError() {
    return Promise.reject('something went wrong')
}

//promise with biz logic 
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

//main method
function main() {
    blockMe('start')
    getUser().then(user => console.log(user))
    getError().catch(err => console.log(err))

    login('admin', 'admin').then(status => console.log(status)).catch(err => console.log(err))
    login('bar', 'foo').then(status => console.log(status)).catch(err => console.log(err))
    blockMe('end')
}
main()