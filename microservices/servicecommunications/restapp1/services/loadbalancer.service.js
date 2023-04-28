const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP"
})

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})

//back end service 
broker.createService({
    name: 'calculator',
    actions: {
        add: {
            handler(ctx) {
                return ctx.call('math.add', { a: 10, b: 20 })
            }
        }
    }
})

async function main() {
    await broker.start();
}
main();