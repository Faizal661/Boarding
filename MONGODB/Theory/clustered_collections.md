Clustered Collection stores documents physically sorted by a specified clustered index key, 
unlike regular collections where data order isn't guaranteed,

leading to faster range/equality queries, 
reduced storage, 
and better bulk insert performance by co-locating data and index in one file. 


you define the clustered index (e.g., on a timestamp) upon collection creation, 
improving data locality for common time-series or ordered data patterns, 
though it's backward-incompatible and requires dropping the collection to downgrade. 


Key Characteristics:
    Data Organization: 
        Documents are physically stored in order of the clustered index key. 
    Performance Boost: 
        Faster range scans and equality lookups on the clustered key without needing separate index files for data location. 
    Storage Efficiency: 
        Lower storage footprint as data and index are in one file, reducing fragmentation. 
    Creation: 
        Must be specified when creating the collection; cannot convert existing collections. 
    Use Cases: 
        Ideal for time-series data or scenarios with frequent range/equality queries on a specific field (like createdAt or _id). 


How it Works (vs. Traditional):
    Traditional: 
        Data is unordered; a separate index (like _id) points to data locations, requiring disk seeks. 
    Clustered: 
        Data and index are one, so reading a range of values means reading contiguous disk blocks, similar to a B-tree structure, improving I/O.


Example :
    db.createCollection("iot_readings", {
        clusteredIndex: {
            "key": { _id: 1 },
            "unique": true,
            "name": "timestamp_clusters"
        }
    })

    db.iot_readings.insertMany([
        { _id: ISODate("2025-12-27T10:00:00Z"), sensor: "A1", value: 22.5 },
        { _id: ISODate("2025-12-27T10:05:00Z"), sensor: "A1", value: 22.7 },
        { _id: ISODate("2025-12-27T10:10:00Z"), sensor: "A1", value: 23.0 }
    ])

    // This query retrieves all readings after 10:01 AM in a single physical read path
    db.iot_readings.find({ 
        _id: { $gt: ISODate("2025-12-27T10:01:00Z") } 
    })



// we can also use TTL index with this clustered collection

    db.createCollection("logs", {
        clusteredIndex: {
            "key": { _id: 1 },
            "unique": true,
            "name": "timestamp_ttl_cluster"
        },
        // Documents expire 1 hour after the date stored in _id
        expireAfterSeconds: 3600 
    })
