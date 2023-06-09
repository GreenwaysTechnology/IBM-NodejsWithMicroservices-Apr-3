const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')
const DbService = require('moleculer-db')
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

const broker = new ServiceBroker({
    transporter: "TCP"
})
//api server : http server
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                },
                autoAliases: true
            }
        ]
    }
})

broker.createService({
    name: 'posts',
    //db service
    mixins: [DbService],
    //adapter configurations says that what type of database you are connecting-postr
    adapter: new SqlAdapter("postgres://postgres:postgres@localhost/postgres"),
    model: {
        name: "post",
        define: {
            title: Sequelize.STRING,
            content: Sequelize.TEXT,
            votes: Sequelize.INTEGER,
            author: Sequelize.STRING,
            status: Sequelize.BOOLEAN
        },
        options: {
            // Options from https://sequelize.org/docs/v6/moved/models-definition/
        }
    }  
})

async function main() {
    await broker.start()
}
main()

