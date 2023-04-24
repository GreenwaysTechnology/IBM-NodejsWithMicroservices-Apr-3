

const blockMe = (message) => console.log(message)

const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 5000, 'login success')
    } else {
        setTimeout(reject, 5000, 'login failed')
    }
}
blockMe('start')
login('admin', 'admin', status => console.log(status), err => console.log(err))
blockMe('end')