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
                "GET profile/city": "profile.findByCity",
                "REST profile": "profile",
            },
            whitelist: [
                "profile.list", "profile.update", "profile.findByCity", "profile.create", "profile.get"
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
        findByCity: {
            handler(ctx) {
                console.log('query params', ctx.params)
                return 'Query params'
            }
        },
        get: {
            handler(ctx) {
                const params = ctx.params
                console.log('parms', params.id)
                return 'Get By id'
            }
        },
        create: {
            handler(ctx) {
                const inputpayload = ctx.params
                console.log(inputpayload)
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