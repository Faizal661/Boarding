db.employees.findOneAndUpdate(
    {},
    {
        $mul:{
            salary:1.1
        }
    },
    {
        sort:{
            salary:1
        }
    }
)
// result will be like => 50000 to 55000.00000001



db.employees.findOneAndUpdate(
   {}, 
   [
     { 
       $set: { 
         salary: { 
           $round: [{ $multiply: ["$salary", 1.1] }, 0] 
         } 
       } 
     }
   ],
   { 
     sort: { salary: 1 },
     returnDocument: "after" 
   }
)

// Handle rounding off problem => give correct value 55000 .






// updating multiple documents having same lowest salary (increment by 10%)

db.employees.aggregate([
  // 1. Find the minimum salary across the whole collection
  {
    $group: {
      _id: null,
      minSalary: { $min: "$salary" },
      docs: { $push: "$$ROOT" } // Temporarily store all documents
    }
  },
  // 2. Unwind the documents so we can process each one
  { $unwind: "$docs" },
  // 3. Only keep documents that match that minimum salary
  { 
    $match: { 
      $expr: { $eq: ["$docs.salary", "$minSalary"] } 
    } 
  },
  // 4. Calculate the new rounded salary for these specific documents
  {
    $set: {
      "docs.salary": { 
        $round: [{ $multiply: ["$docs.salary", 1.1] }, 0] 
      }
    }
  },
  // 5. Replace the root with the modified document
  { $replaceRoot: { newRoot: "$docs" } },
  // 6. Merge the changes back into the original 'employees' collection
  { 
    $merge: { 
      into: "employees", 
      on: "_id", 
      whenMatched: "merge" 
    } 
  }
]);
