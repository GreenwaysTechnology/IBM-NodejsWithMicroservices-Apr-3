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
                //access meta information
                return ctx.call('adder.add', { a, b }, { meta: { secrete: 'foo' } })
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
                // return a + b //Promise.resolve(a+b)
                console.log('meta =>', ctx.meta)
                return new this.Promise((resolve, reject) => {
                    setTimeout(resolve, 5000, (a + b))
                })
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
