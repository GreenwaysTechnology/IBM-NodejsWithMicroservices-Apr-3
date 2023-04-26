const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: 'number',
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                //invoke adder service to get result
                //ctx.call('adder.add', { a: a, b: b })
                return ctx.call('adder.add', { a, b })
            }
        }
    }
})

broker.createService({
    name: 'adder',
    actions: {
        add: {
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
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()
