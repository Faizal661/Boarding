A Trigger is a piece of code that automatically executes when a specific event occurs 
in your database (like an insert, update, or delete).

Unlike SQL databases where triggers are often part of the core engine, 
MongoDB triggers are primarily provided through MongoDB Atlas (their managed cloud service).


Types of Triggers:
    Database Triggers: 
        Fired by CRUD operations (e.g., "When a user is deleted, automatically delete their profile photos").
    Scheduled Triggers: 
        Fired at a specific time or interval (e.g., "Every night at 12 AM, generate a daily sales report").
    Authentication Triggers: 
        Fired when a user signs up or logs in.



3. Self-Managed "Triggers" (Change Streams)

    If you are not using MongoDB Atlas, the database does not have a "native" trigger object. 
    Instead, you build your own using Change Streams.

    Your application code "watches" a collection and acts as the trigger:

        const collection = db.collection('orders');
        const changeStream = collection.watch();

        // This acts as a trigger in your application code
        changeStream.on('change', (next) => {
            if (next.operationType === 'insert') {
                console.log("A new order was placed! Send an email...");
            }
        });