$search is the pipeline stage used to perform complex full-text and semantic search operations. 


Usage Rules
    Position: 
        The $search stage must be the first stage in the aggregation pipeline.
    Internal Pipeline Use: 
        It can also be the first stage inside a sub-pipeline for $lookup or $unionWith (starting in MongoDB 6.0).



db.collection.aggregate([
  {
    $search: {
      index: "mySearchIndex", // optional if using "default"
      text: {
        query: "search term",
        path: "fieldToSearch"
      }
    }
  }
])
