//function as parameter : Higher order function 

//a and b are args
function add(a, b) {
    return a + b
}
//10, 10 number value 
console.log(add(10, 10))
let x = 10;
let y = 10
console.log(add(x, y))


//function is value so that we can pass as parameter

function read(foo) {
    foo()
}
//anonmous function 
let bar = function () {
    console.log('bar')
}
read(bar)
//anonmous function 
read(function () {
    console.log('bar')
})