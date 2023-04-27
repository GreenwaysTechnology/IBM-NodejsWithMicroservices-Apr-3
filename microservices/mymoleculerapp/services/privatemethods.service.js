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
                //call private methods
                return this.addNums(a,b)
            }
        }
    },
    methods: {
        addNums(a = 0, b = 0) {
            return a + b
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
