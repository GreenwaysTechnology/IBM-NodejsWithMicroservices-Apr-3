const { json } = require("express")

const users = [{
    id: 1,
    name: 'a',
    status: true,
},
{
    id: 2,
    name: 'b',
    status: false
}
    , {
    id: 3,
    name: 'a',
    status: true
}
]
class UserService {
    constructor() { }

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, users)
        })
    }
    save(user) {
        //here you can write app logic to save 
        console.log(user)
        //console.log(JSON.parse(user))
        return Promise.resolve(`saved`)
    }
    async findById(id){
        //lookup data based on id 
      return id
    }
}

module.exports = new UserService()