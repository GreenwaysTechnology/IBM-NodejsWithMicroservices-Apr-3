//Object creations using functions

//es 5 style of declaring class 
function Employee(id = 1, name = 'Subramanian') {
    //instance variables
    this.id = id
    this.name = name
    //instance methods
    this.calculateSalary = function () {
        return 100
    }
}
//creating object 
//let is keyword
//emp is just object reference variable
//new is keyword
//Employee() is constructor call 
let emp = new Employee();
console.log(emp.id, emp.name, emp.calculateSalary())

emp = new Employee(2, 'ram'); //constructor parameters
console.log(emp.id, emp.name, emp.calculateSalary())