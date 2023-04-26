const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        sayGreet() {
            return 'Greet'
        }
    }
})
broker.createService({
    name: 'hello',
    actions: {
        //methods
        sayHello() {
            return 'Hello'
        },

    }
})
broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai'
        }
    }
})
async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
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
