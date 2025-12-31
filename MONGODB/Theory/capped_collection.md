capped collections

    they are fixed-size collections that support high-throughput operations by behaving like circular buffers.
    When a capped collection reaches its maximum size, it automatically overwrites the oldest entries with new data.


db.createCollection("log", { capped: true, size: <number_in_bytes> })


capped: 
    Set to true to enable the capped feature.
size: 
    Required. Specifies the maximum size for the collection in bytes. MongoDB pre-allocates this space.
max: 
    Optional. Specifies the maximum number of documents allowed. 
    If the collection reaches the size limit before the max document count, it will still remove older documents. 

db.createCollection("log", { capped: true, size: 5242880, max: 5000 })




Key Operations & Features

Verification: 
    Use db.collectionName.isCapped() to check if a collection is capped.
Conversion: 
    You can convert an existing non-capped collection using the convertToCapped command.
        - db.runCommand({ convertToCapped: "logs", size: 10485760 })
Modification: 
    As of MongoDB 6.0, you can use the 
    collMod command to change the cappedSize (in bytes) or 
    - db.runCommand({ collMod: "logs", cappedSize: 20971520 }) // Change to 20 MB
    cappedMax (document limit) of an existing capped collection.
    - db.runCommand({ collMod: "logs", cappedMax: 10000 }) // Limit to 10k docs
Insertion Order: 
    Capped collections preserve the natural insertion order, 
    making queries without a sort order very fast as they return the oldest documents first.
Tailable Cursors: 
    These collections support "tailable cursors," which remain open and continue to retrieve new data as it is inserted, similar to the Unix tail -f command. 



// get collection info
    
    db.getCollectionInfos({ name: "cappedCollection" })


// convert existing collection into capped 

    db.runCommand({ 
        collMod: "logs", 
        cappedSize: 20971520, 
        cappedMax: 10000 
    })
