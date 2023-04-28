const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const DbService = require('moleculer-db')
const broker = new ServiceBroker();
const Fakerator = require('fakerator');

//Fakerator object we need to create
const fakerator = new Fakerator();

broker.createService({
    name: 'users',
    mixins: [DbService],
    //database specific properties
    adapter: new DbService.MemoryAdapter(), //NeDb integration,
    //column mapping
    settings: {
        fields: ["_id", "firstName", "lastName", "email", "status"],
        pageSize: 200
    },
    //life cycle method
    afterConnected() {
        //seeding the database with default data
        console.log('connection started')
    },
    methods: {
        async seedDB() {
            console.log('Seeding User Database starts');
            //generate fake users
            const fakeUsers = fakerator.times(fakerator.entity.user, 200);
            //insert into db
            const insertedUsers = await this.adapter.insertMany(fakeUsers);
            console.log(`Created ${insertedUsers.length}`)
        }
    },
    //service life cycle
    async started() {
        if ((await this.adapter.count()) === 0) {
            await this.seedDB();
        } else {
            console.log(`DB contains ${await this.adapter.count()} users`)
        }
    },
    actions: {
        //with Database actions are generated automatically mapped with db
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