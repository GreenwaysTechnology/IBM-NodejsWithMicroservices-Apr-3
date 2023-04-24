//Object creations using classes

//es 6 style of declaring class 
class Employee {
    //instance variables
    constructor(id = 1, name = 'Subramanian') {
        this.id = id
        this.name = name
    }
    //instance methods
    calculateSalary() {
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