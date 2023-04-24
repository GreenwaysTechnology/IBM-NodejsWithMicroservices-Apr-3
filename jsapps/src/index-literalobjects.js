//literal syntax 

let employee = {
    id: 1,
    name: 'Subramanian',
    // calculateSalary: function () {
    //     return 100
    // }
    calculateSalary() {
        return 100
    }
}
console.log(employee.id, employee.name, employee.calculateSalary())

//nested objects 
employee = {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    },
    calculateSalary() {
        return 100
    }
}
console.log(employee.id, employee.name, employee.calculateSalary(),employee.address.city)
