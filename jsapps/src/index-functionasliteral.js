function sayHello() {
    return 'Hello'
}
//invoke function 
console.log(sayHello())

//how to initalize the function to variable : functional programming principles
//function as value
//hello is just variable holding function 
let hello = sayHello;
//the variable holding function reference can be used to invoke that function 
console.log(hello())

//inline function declaration 

//anonmous functions : functions without name
let add = function (a = 0, b = 0) {
    return a + b
}
//invoke function 
console.log(add(10,10))

