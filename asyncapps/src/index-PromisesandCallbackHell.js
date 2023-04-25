//callback hell 
//callback nesting :async composition

const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }
        //user=undefined
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { err: 'User Not Found' })
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'welcome to  dashboard')
        } else {
            setTimeout(reject, 1000, 'Try to login')
        }
    })
}

// //
// getUser(user => {
//     login(user, status => {
//         showDashboard(status, page => {
//             console.log(page)
//         }, err => {
//             console.log(err)
//         })
//     }, err => {
//         console.log(err)
//     })
// }, err => {
//     console.log(err)
// })
function main() {
    // getUser()
    //     .then(user => {
    //         login(user)
    //             .then(status => {
    //                 showDashboard(status)
    //                     .then(page => console.log(page))
    //                     .catch(err => console.log(err))
    //             })
    //             .catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashboard(status)
    //     })
    //     .then(page => {
    //         console.log(page)
    //     })
    //     .catch(err => console.log(err))

    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(page => console.log(page))
        .catch(err => console.log(err))
}
main()

