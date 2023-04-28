const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker();

broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            rest: "GET /",
            handler(ctx) {
                return 'products';
            }
        },
        //GET product by id
        get: {
            rest: "GET /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'products by id'
            }
        },
        //save
        create: {
            rest: "POST /",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product Created'
            }
        },
        //update
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
        },
        //delete
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
        }
    }
})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
            },
            autoAliases: true
        }]
    }
})

async function main() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
main()