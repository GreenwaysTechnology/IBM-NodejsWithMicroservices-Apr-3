const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        //methods
        sayHello() {
            return 'Hello'
        },
        sayHai() {
            return 'Hai'
        },
        sayGreet() {
            return 'Greet'
        }
    }
})
async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        const hello = await broker.call('greeter.sayHello')
        const hai = await broker.call('greeter.sayHai')
        const greet = await broker.call('greeter.sayGreet')
        console.log(hello)
        console.log(hai)
        console.log(greet)

    }
    catch (err) {
        console.log(err)
    }
}
main()
