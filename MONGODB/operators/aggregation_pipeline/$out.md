$out is a stage that writes the documents resulting from a pipeline into a specified collection. 


// Output to a collection in the same database
{ $out: "targetCollectionName" }

// Output to a collection in a different database
{ $out: { db: "outputDB", coll: "targetCollectionName" } }



Feature 	            $out	                            $merge

Data Action	            Replaces the entire collection	    Can insert, merge, or update existing docs
Atomicity	            Atomic at the collection level	    Atomic at the document level
Materialized Views	    Best for complete refreshes	        Ideal for incremental updates