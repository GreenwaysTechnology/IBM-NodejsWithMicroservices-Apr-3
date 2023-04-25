//promise factory apis

function blockMe(message) {
    console.log(message)
}
function getUser() {
    // return Promise.resolve({ id: 1, name: 'subramanian' })//success->Promise Object
    return new Promise((resolve, reject) => {
        setTimeout(resolve,5000,{ id: 1, name: 'subramanian' })
    })
}


//main method
function main() {
    blockMe('start')
    getUser().then(user => console.log(user))
    blockMe('end')
}
main()