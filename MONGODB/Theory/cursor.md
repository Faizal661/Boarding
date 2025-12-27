A Cursor is a pointer to the result set of a query.

When you run db.collection.find(), MongoDB doesn't immediately dump all matching documents into memory. 
Instead, it returns a cursor that allows you to iterate through the results in batches.

Key Characteristics:
    Batching: 
        By default, it fetches a small number of documents (usually 101 or 16MB worth) to save RAM. 
        It only fetches more as you iterate.
    Timeout: 
        Cursors automatically close after 10 minutes of inactivity to free up server resources.
    Non-Persistent: 
        If the connection breaks, the cursor is lost.


Common Cursor Methods:

        let cursor = db.users.find({ age: { $gt: 25 } });

    // Manual iteration
        while (cursor.hasNext()) {
            printjson(cursor.next());
        }

    // Common modifiers
        cursor.sort({ name: 1 }).limit(10).skip(5);