const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

//create service pass gatway as parameter
//create service use mixing to inherit gateway service

// broker.createService(ApiGateWay)

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})
async function main() {
    await broker.start();
}
main();