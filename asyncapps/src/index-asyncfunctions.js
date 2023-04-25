//async function 

async function getValue() {
    //return 10
    //return Promise.resolve(10)
    return 10 // here you wrap automatically Promise.resolve(10)
}

function main() {
    // console.log(getValue())
    getValue().then(value => console.log(value))
}
main()