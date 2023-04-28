const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    //transporter 
    transporter: "TCP",
    // cacher: "Memory", // enables in memory cache- RAM
    // cacher:"Redis" // redis://localhost:6379
    registry: {
        discoverer: "Local", //registry 
        strategy: "RoundRobin" //load balancer 
    }

})

//math service 
broker.createService({
    name: 'math',
    actions: {
        add: {
            cache: true,
            handler(ctx) {
                const { a, b } = ctx.params
                return `${a+b} from ${broker.nodeID}`
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