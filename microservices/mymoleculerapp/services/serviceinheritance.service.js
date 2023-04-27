const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

//parent Services
const hello = {
    name: 'hello',
    settings: {
        message1: 'Hello Parent service'
    },
    actions: {
        sayHello() {
            return 'Hello,From Parent';
        }
    }
}
const hai = {
    name: 'hai',
    settings: {
        message2: 'Hai Parent service'
    },
    actions: {
        sayHai() {
            return 'Hai, From Parent'
        }
    }
}

broker.createService({
    name: 'greeter',
    mixins: [hello, hai], //inheritance
    settings: {
        message2: 'Hai Parent and Child service'
    },
    actions: {
        sayGreet() {
            return 'Child method'
        },
        getProp() {
            return `${this.settings.message1} ${this.settings.message2}`
        }
    }
})
async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();
