const EventEmitter = require('events')

//steps
/**
 * 1.register event -emitters
 *    the emiter can be system(kernal) - socket events,timers,fs events
 *    the emiter can be your app(custom events) - sales,insert,update,
 * 2.listen for event - listeners
 *    the function called callback(listeners) listens for any type of event
 */

class SalesService extends EventEmitter {
    constructor() {
        super()
        //listener registration
        this.on('sales', data => {
            console.log(data)
        })
    }
    sale(product) {
        //emit event
        this.emit('sales', product)
    }

}
function main() {
    let salesService = new SalesService()
    salesService.sale({ id: 1, name: 'phone', qty: 100, price: 3000})
}
main()