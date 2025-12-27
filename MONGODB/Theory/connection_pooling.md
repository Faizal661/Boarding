Connection Pooling is a cache of database connections maintained by the driver 
so that connections can be reused when new requests to the database are required.

Creating a new connection for every single database request is extremely "expensive" 
in terms of time and resources (CPU, memory, and network handshaking). 
Connection pooling solves this by keeping a "pool" of open connections ready for use.


1. How it Works
    When your application starts, the MongoDB driver opens a set number of connections.

    Requesting: 
        When your code performs a find() or save(), the driver "borrows" an available connection from the pool.
    Releasing: 
        Once the operation is complete, the driver doesn't close the connection; it returns it to the pool for the next request.
    Queueing: 
        If all connections in the pool are currently busy, the request is placed in a queue until a connection becomes free.


2. Key Settings
    You can tune the pool's behavior via the Connection String or the driver's configuration object:

    maxPoolSize (Default: 100): 
        The maximum number of connections the pool can have open. 
        If your app handles high concurrency, you might need to increase this.
    minPoolSize (Default: 0): 
        The minimum number of connections the driver will maintain, even if the app is idle.
    maxIdleTimeMS: 
        How long a connection can remain unused in the pool before it is closed and removed.
    waitQueueTimeoutMS: 
        How long a thread will wait for a connection to become available before throwing an error.

3. Benefits of Pooling
    Reduced Latency: 
        Skips the overhead of the TCP/IP handshake and the MongoDB authentication process for every query.
    Resource Management: 
        Prevents the database server from being overwhelmed by thousands of simultaneous "new connection" requests.
    Application Stability: 
        By capping the maxPoolSize, you ensure your application doesn't accidentally spawn so many connections that it crashes the database.

5. Monitoring Connections
    You can check how many connections are currently active on your MongoDB instance using the serverStatus command:

        db.serverStatus().connections

    This will show:
        current: Connections currently open.
        available: How many more the server can handle.
        totalCreated: A historical count of all connections ever opened.


Connection pooling is handled automatically by almost all modern MongoDB drivers (Node.js, Python, Java, etc.). 
Your main job as a developer is to ensure you create a single instance of the MongoClient and reuse it throughout your application.