//function args and parameters

//a and b are args
//default args : incase args are undfined default value can be assigned
function multiply(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    return a * b
}
//10 , 10 are parameters
console.log(multiply(10, 10))
console.log(multiply()) //undefined , undefined
console.log(multiply(20)) //undefined , undefined