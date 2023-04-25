// const UserService = require('./services/user.service')
// const userservice = require('./services/user.service')
const { findAll, findAllcb } = require('./services/user.service')
async function main() {

    //let user = new UserService()
    // console.log(userservice.findAll())
    // console.log(findAll())
    try {
        const users = await findAll()
        console.log(users)
    }
    catch (err) {
        console.log(err)
    }
    //using callbacks
    findAllcb(users => {
        console.log(users)
    }, err => {
        console.log(err)
    })

}

main()