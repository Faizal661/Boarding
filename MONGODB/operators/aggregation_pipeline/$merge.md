$merge 
    - merge operator is an aggregation stage that writes the results of a pipeline back into a collection.
    - It is the standard way to perform "Upserts" (Update or Insert) and complex data transformations across collections.


1. Key Features
    Target Any Collection: 
        You can merge results into the same collection you are querying or a completely different one.
    Flexible Matching: 
        It uses a unique identifier (usually _id) to decide if it should update an existing document or insert a new one.
    Conditional Logic: 
        You can tell MongoDB exactly what to do when a match is found 
        (e.g., keep the old data, overwrite it, or run a sub-pipeline).
    Output to Different Databases: 
        You can even merge data into a collection in a different database on the same cluster.


{
  $merge: {
    into: "target_collection",       // The name of the collection to write to
    on: "_id",                       // The field used to match documents (must be indexed)
    whenMatched: "replace",          // Choices: "replace", "keepExisting", "merge", "fail", or [pipeline]
    whenNotMatched: "insert"         // Choices: "insert", "discard", "fail"
  }
}



2. Why $merge is better than $out

Feature	            $out	                                        $merge

Data Retention	    Replaces the entire collection.	                Updates only matching documents.
Atomicity	        Creates a new temp collection and renames it.	Performs standard document updates/inserts.
Cross-DB	        No.                                             Yes.
Real-time	        Best for one-time backups.	                    Best for continuous reporting and syncing.



 $merge: { 
      into: { db: "targetDatabase", coll: "targetCollection" },
      on: "_id",           // Field to match on (must have a unique index)
      whenMatched: "merge", // Options: "replace", "keepExisting", "merge", "fail"
      whenNotMatched: "insert" // Options: "insert", "discard", "fail"
} 