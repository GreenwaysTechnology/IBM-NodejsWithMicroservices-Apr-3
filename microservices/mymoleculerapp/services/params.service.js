const { ServiceBroker } = require('moleculer')
//create broker Object/Instance
const broker = new ServiceBroker()


broker.createService({
    name: 'greeter',
    actions: {
        sayHello(ctx) {
            // const name = ctx.params.name
            const { name } = ctx.params
            return `Hello ${name}`
        }
    }
})
async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        //parameters
        const res = await broker.call('greeter.sayHello', { name: 'Subramanian' })
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()
