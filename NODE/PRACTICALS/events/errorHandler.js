const EventEmitter = require('events');

class CustomErrorHandler extends EventEmitter {
    constructor() {
        super();
        this.log = []; 
    }
    handleError(err, context = 'General') {
        err.context = context;
        
        this.emit('error', err);
    }
    initializeGlobalHandler() {
        process.once('uncaughtException', (err, origin) => {
            console.error('\n!!! GLOBAL UNCAUGHT EXCEPTION !!!');
            this.handleError(err, `Global Uncaught Exception from ${origin}`);
            
            console.log('Exiting process due to critical error...');
            process.exit(1); 
        });
    }
}

const errorHandler = new CustomErrorHandler();

// 1. Register Listeners (Defining how errors are handled)
// Listener 1: Simple logging
errorHandler.on('error', (err) => {
    console.log(`\n[LOGGER]: Error handled: ${err.message}`);
    errorHandler.log.push({ timestamp: new Date(), message: err.message, context: err.context });
});
// Listener 2: Alerting on specific context (e.g., critical services)
errorHandler.on('error', (err) => {
    if (err.context === 'DB Connection') {
        console.warn(`[ALERTING]: Paging on-call team! Critical DB error in context: ${err.context}`);
    }
});
// Listener 3: Detailed logging for debugging
errorHandler.on('error', (err) => {
    console.debug(`[DEBUG]: Stack trace for ${err.context}:\n${err.stack.split('\n').slice(0, 3).join('\n')}`);
});



// 2. Demonstration of Error Handling

console.log('--- Emitting Errors ---');
// Case A: A database error is simulated
const dbError = new Error("Connection Timeout: Could not connect to primary host.");
errorHandler.handleError(dbError, 'DB Connection');

// Case B: A simple validation error from an API route
const apiError = new Error("Invalid input in 'email' field.");
errorHandler.handleError(apiError, 'API route /signup');


// 3. Testing Global Uncaught Exception (Optional)

errorHandler.initializeGlobalHandler();
throw new Error("This is an unhandled exception outside of a try/catch!");3
