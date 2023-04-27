const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})

//back end service 
broker.createService({
    name: 'greeter',
    actions: {
        hello: {
            handler(ctx) {
                return 'Hello'
            }
        }
    }
})

async function main() {
    await broker.start();
}
main();