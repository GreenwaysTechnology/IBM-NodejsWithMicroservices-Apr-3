const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    //service methods 
    actions: {
        //normal pattern
        add(ctx) {
            const { a, b } = ctx.params
            return a + b
        },
        addNums: {
            params: {
                //fastest-validator rules:https://github.com/icebob/fastest-validator
                a: 'number',
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a + b
            }
        }
    }
})
async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        const res = await broker.call('math.add', { a: 10, b:10 })
        console.log(res)
        const res1 = await broker.call('math.addNums', { a: 10, b:10.5 })
        console.log(res1)

    }
    catch (err) {
        console.log(err)
    }
}
main()
