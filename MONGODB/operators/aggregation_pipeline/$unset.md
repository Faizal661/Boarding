$unset is a pipeline stage used to remove or exclude specific fields from documents. 


1. Core Functionality

Field Removal: 
    It completely removes specified fields, which is useful for data cleanup, reducing payload size, or hiding sensitive information before sending results to a client.
Alias for $project: 
    It is a shorthand for a $project stage that explicitly excludes fields (e.g., { $project: { field: 0 } }).
Non-Destructive (Aggregation): 
    When used in a standard aggregation pipeline, it only removes fields from the documents in the result set; it does not modify the original documents in the collection.
Destructive (Update): 
    When used within an update pipeline (available in updateMany or findAndModify), it physically deletes the fields from the stored documents. 



Remove a single field:
    { $unset: "fieldName" }
Remove multiple fields:
    { $unset: [ "field1", "field2", "stats.internalScore" ] }
