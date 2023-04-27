const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({

    // Called after broker created.
    async created(broker) {
        console.log('Broker is created')
    },

    // Called after broker started.
    async started(broker) {
        console.log('Broker is started')
    },
    // Called after broker stopped.
    async stopped(broker) {
        console.log('Broker is stopped')

    }
})

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
                return this.addNums(a, b)
            }
        }
    },
    methods: {
        addNums(a = 0, b = 0) {
            return a + b
        }
    },
    //life cycles 
    created() {
        console.log('Service is created')
    },
    merged() {
        console.log('Service is merged')
    },
    async started() {
        console.log('Service is started')
    },
    async stopped() {
        console.log('Service is stopped')
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
