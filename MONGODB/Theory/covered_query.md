A covered query is a query that can be satisfied entirely by using an index, 
without ever having to look at the actual documents in the collection.

- When a query is "covered," MongoDB matches the query conditions and returns the result fields using only the index keys.
  Since indexes are stored in RAM (or are much smaller on disk than the full documents), 
  this is significantly faster because it avoids Document Fetching (also known as a "FETCH" stage in the execution plan).

Requirements for a Covered Query
    For a query to be covered, two conditions must be met:

    All fields in the query criteria must be part of the index.
    All fields returned in the projection must be part of the same index.

    You must explicitly exclude the _id field in your projection (unless _id is part of the index), 
    because MongoDB includes it by default.

Example :
    - Suppose you have a users collection with an index on 'name' and 'status':
    - db.users.createIndex({ name: 1, status: 1 });

    - covered query ->✅
    - db.users.find(
        { name: "Alice" },               // Query uses indexed field
        { name: 1, status: 1, _id: 0 }   // Projection uses only indexed fields + excludes _id
      );


    - Not an query ->❌
        db.users.find(
            { name: "Alice" }, 
            { name: 1, status: 1, email: 1, _id: 0 } // 'email' is not in the index
        );
    - In this case, MongoDB must go to the disk to fetch the document to find the email field.



To see if your query is covered, append ".explain("executionStats")" to your query and look at the executionStages:
- Covered Query: You will see an 'IXSCAN' stage, but you will not see a 'FETCH' stage.
- Non-Covered Query: You will see an 'IXSCAN' followed by a 'FETCH' stage.




Benefits :
- Speed: Extreme performance boost (RAM-only access).
- Lower I/O: Reduces disk stress.
- Efficiency: Saves CPU cycles on document transformation.

Limitation : 
- Index Size: Adding many fields to an index to "cover" queries makes the index larger.
- No Multi-key: You cannot cover a query if the indexed field is an array.
- No Geo-spatial: Geospatial indexes cannot cover queries.