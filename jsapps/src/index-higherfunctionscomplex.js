//complex hof 

function login(userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        success('login success') //pass value
    } else {
        failure('login failure')
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})
login('foo', 'bar', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})