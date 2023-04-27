const { ServiceBroker } = require('moleculer')

//passing service broker schema : the configuration
//if you dont supply, the service broker will have its own default values
const broker = new ServiceBroker({
    //transporter 
    // transporter: "TCP"
    transporter: "nats://localhost:4222",
    serializer: "MsgPack",
    //cacher: "Memory" // enables in memory cache- RAM
    cacher:"Redis" // redis://localhost:6379
})

//math service 
broker.createService({
    name: 'math',
    actions: {
        add: {
            cache: true,
            handler(ctx) {
                const { a, b } = ctx.params
                console.log('Math.calculate is called')
                //call remote service
                return ctx.call("add.calculate", { a, b })
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