//Arrow functions are used to replace es 5 style anonmous functions

//es 5 anonmous style function 
let greet = function () {
    console.log('greet-es 5')
}
greet()
//es 6 arrow functions 
greet = () => {
    console.log('greet-arrow')
}
greet()
// code Refactoring
//if function has only one line of body : we can remove {}
greet = () => console.log('greet-arrow-1')
greet()

//arrows and args & parameters
let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(`C ${c}`)
}
add(10, 10)
//arrows and args & parameters with return only 
add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))
//only return statement : we can remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))
//hof and arrow 

let login = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})
login('admin', 'admin', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})
login('admin', 'admin', (status) => console.log(status), (err) => console.log(err))

//if variable has no default value, we can remove ()
login('admin', 'admin', status => console.log(status), err => console.log(err))