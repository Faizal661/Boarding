$unionWith is a powerful stage used to merge results from two different collections into a single result set.


{
  $unionWith: {
     coll: "<collectionName>",
     pipeline: [ <optional pipeline stages> ] // Applied to the foreign collection
  }
}



Feature 	        $unionWith	                                                $lookup

Primary Goal	    Append records (vertical join)	                            Join related data (horizontal join)
Data Structure      Documents from both collections appear as separate items    Data from the second collection is added as a new field ([])
Use Case	        Merging "Historical_Sales" with "Current_Sales"	            Fetching "Customer_Details" for each "Order"