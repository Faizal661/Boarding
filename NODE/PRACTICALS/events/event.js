// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}!`);
// });

// myEmitter.emit('greet', 'Faizal');



// //------------
// myEmitter.once('onlyOnce', () => {
//     console.log('This will only run once!');
// });

// myEmitter.emit('onlyOnce');
// myEmitter.emit('onlyOnce');


// //------------
// const listener = () => console.log('Hello!');
// myEmitter.on('hello', listener);

// myEmitter.emit('hello');
// myEmitter.removeListener('hello', listener);
// myEmitter.emit('hello'); // No output


// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances 
let eventEmitter = new EventEmitter();
 
let geek1= (msg) => {
    console.log("Message from geek1: " + msg);
};
 
let geek2 = (msg) => {
    console.log("Message from geek2: " + msg);
};

// Registering geek1 and geek2
eventEmitter.once('myEvent', geek1);
eventEmitter.once('myEvent', geek2);
 
// Removing listener geek1 that was
// registered on the line 13
 
// Triggering myEvent
eventEmitter.emit('myEvent', "Event occurred");
eventEmitter.emit('myEvent', "Event occurred");
eventEmitter.emit('myEvent', "Event occurred");
