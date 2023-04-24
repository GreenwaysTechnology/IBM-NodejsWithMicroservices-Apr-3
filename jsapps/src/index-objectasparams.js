//how to pass object as parameter

function createService(serviceSchema) {
    console.log(serviceSchema.name)
    console.log(serviceSchema.version)
    console.log(serviceSchema.actions.findAll())

}
createService({
    name: 'ProductService',
    version: '1.0.0',
    actions: {
        findAll() {
            return 'products'
        }
    }
})

//how to return object from the function 
function getStock() {
    return {
        id: 2,
        name: 'google',
        price: 1000
    }
}
console.log(getStock())