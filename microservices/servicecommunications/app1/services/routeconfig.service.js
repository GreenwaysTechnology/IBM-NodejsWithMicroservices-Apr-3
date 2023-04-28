const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [{
            path: '/api'
        }, {
            path: '/admin'
        }]
    }
})

//payload 
const payload = [
    { id: 1, name: 'Subramanian', status: true },
    { id: 2, name: 'Murugan', status: false },
    { id: 1, name: 'Geetha', status: true }
]

//back end service 
broker.createService({
    name: 'profile',
    actions: {
        list: {
            handler(ctx) {
                return payload
            }
        }
    }
})

async function main() {
    await broker.start();
}
main();