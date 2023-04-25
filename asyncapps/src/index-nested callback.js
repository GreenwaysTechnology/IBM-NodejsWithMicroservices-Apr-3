//callback nesting :async composition

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    //user=undefined
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { err: 'User Not Found' })
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}

const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'welcome to  dashboard')
    } else {
        setTimeout(reject, 1000, 'Try to login')
    }
}

getUser(user => {
    login(user, status => {
        showDashboard(status, page => {
            console.log(page)
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}, err => {
    console.log(err)
})