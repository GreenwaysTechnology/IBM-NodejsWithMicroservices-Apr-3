// how to destrcture object properties

//arg destructuring 


//without destrucing
let getProfile = (profile) => {
    //display all profile details
    console.log(`Id ${profile.id}`)
    console.log(`Name ${profile.name}`)
    console.log(`status ${profile.status ? "Available" : "NotAvailable"}`)
    console.log(`City ${profile.address.city}`)

}
getProfile({ id: 1, name: 'subramanian', status: true, address: { city: 'Coimbatore' } })

//with destrucing
getProfile = (profile) => {
    const { id, name, status, address: { city } } = profile
    //display all profile details
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`status ${status ? "Available" : "NotAvailable"}`)
    console.log(`City ${city}`)

}
getProfile({ id: 1, name: 'subramanian', status: true, address: { city: 'Coimbatore' } })

getProfile = ({ id, name, status, address: { city } }) => {
    //display all profile details
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`status ${status ? "Available" : "NotAvailable"}`)
    console.log(`City ${city}`)

}
getProfile({ id: 1, name: 'subramanian', status: true, address: { city: 'Coimbatore' } })

//returning object and destructuring

let getStock = () => {
    return {
        id: 1,
        symbol: 'Google',
        price: 1000,
        qty: 10
    }
}
console.log(getStock())

//how to object with dyanamic values
getStock = (id = 1, symbol = 'Google', price = 1000, qty = 100) => {
    return {
        id: id,
        symbol: symbol,
        price: price,
        qty: qty
    }
}
console.log(getStock())
console.log(getStock(2, 'Microsoft', 129, 1000))

//destrucing
getStock = (id = 1, symbol = 'Google', price = 1000, qty = 100) => {
    //if left:right both are equal you keep any one 
    return {
        id,
        symbol,
        price,
        qty
    }
}
console.log(getStock())
console.log(getStock(2, 'Microsoft', 129, 1000))

getStock = (id = 1, symbol = 'Google', price = 1000, qty = 100) => ({
        id,
        symbol,
        price,
        qty
})

console.log(getStock())
console.log(getStock(2, 'Microsoft', 129, 1000))