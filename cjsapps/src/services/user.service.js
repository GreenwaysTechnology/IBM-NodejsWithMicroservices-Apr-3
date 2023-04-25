
class UserService {
    constructor() { }
    //apis 
    //sync api
    // findAll() {
    //     return [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
    // }
    //async api using promises
    findAll() {
        const users = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, users)
        })
    }
    findAllcb(resolve, reject) {
        const users = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
        setTimeout(resolve, 5000, users)
    }
    save() {
        return 'save'
    }
}

//share only class 
//module.exports = UserService;
//create object and share 
module.exports = new UserService()