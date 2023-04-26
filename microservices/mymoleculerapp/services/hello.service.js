const { ServiceBroker } = require('moleculer')
//Service types
/**
 * 1.back end service - services are exposed like normal object 
 * 2.front end service - rest api
 * 3.Graphql service 
 * 4.GRPC service
 */

//create broker Object/Instance
const broker = new ServiceBroker()

//create service
//createService is method of broker object
//createService takes object parameter called "Service Schema"
//service schema has lot of properties.
broker.createService({
    name: 'greeter',
    //service methods 
    actions: {
        //methods
        sayHello() {
            return 'Hello'
        }
    }
})
async function main() {
    //     broker.start()
    //         .then(() => {
    //             console.log('Broker is ready')
    //             //call service method
    //             broker.call('greeter.sayHello').then(res => {
    //                 console.log(res)
    //             }).catch(err => {

    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    try {
        await broker.start()
        console.log('Broker is ready')
        const res = await broker.call('greeter.sayHello')
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()
