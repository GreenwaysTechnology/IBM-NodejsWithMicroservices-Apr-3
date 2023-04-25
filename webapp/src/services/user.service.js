
const data = JSON.stringify([{ id: 1, name: 'Subramanian' }])

class UserService {
    constructor() {
    }
    //Promise
    findAll() {
       
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000, data)
        })
    }
    //task need to be implement
    //save operation
    save(){

    }
    update(){

    }
    remove(){

    }
    findByName(){

    }

}
module.exports = new UserService()