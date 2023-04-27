const { ServiceBroker } = require('moleculer')


//passing service broker schema : the configuration
//if you dont supply, the service broker will have its own default values
const broker = new ServiceBroker({
    //transporter 
    // transporter: "TCP"
    transporter: "nats://localhost:4222",
    serializer: "MsgPack",
    //cacher: "Memory"
    cacher:"Redis" // redis://localhost:6379

})

//math service 
broker.createService({
    name: 'add',
    actions: {
        calculate: {
            cache: true,
            handler(ctx) {
                const { a, b } = ctx.params
                //call remote service
                console.log('Add.calculate is called')
                return `${ctx.nodeID} => ${a + b}`
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