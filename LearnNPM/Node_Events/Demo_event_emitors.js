let events = require('events');
let eventEmitter = new events.EventEmitter();

const Listener1 = () => {
    console.log('Listener 1 executed');
}

const Listener2 = () => {
    console.log('Listener 2 executed');
}

eventEmitter.on('connection', Listener1);
eventEmitter.addListener('connection', Listener2);


eventEmitter.emit('connection');

// // Remove the binding of listener1 function
// eventEmitter.removeListener('connection', Listener2);
// console.log("Listener2 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');
console.log("Number of Listeners:" + eventEmitter.listenerCount('connection'));

