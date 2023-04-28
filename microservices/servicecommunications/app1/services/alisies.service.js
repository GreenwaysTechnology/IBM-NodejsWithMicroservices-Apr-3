const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "GET profile": "profile.list",
                "POST profile": "profile.save",
                "PUT profile": "profile.update",
                "GET profile/:id": "profile.get",
                "DELETE profile": "profile.remove"
            },
            whitelist: [
                "profile.list", "profile.update", "profile.save","profile.get"
            ]
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
        },
        get: {
            handler(ctx) {
                return 'Get By id'
            }
        },
        save: {
            handler(ctx) {
                return 'save'
            }
        },
        remove: {
            handler(ctx) {
                return 'remove'
            }
        },
        update: {
            handler(ctx) {
                return 'update'
            }
        }
    }
})

async function main() {
    await broker.start();
}
main();