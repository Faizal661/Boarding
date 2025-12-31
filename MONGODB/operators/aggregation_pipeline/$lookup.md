lookup aggregation stage is used to perform "left outer joins" between collections. 
It allows you to combine documents from two different collections in the same database.


1. Basic $lookup (Equality Match)

db.orders.aggregate([
  {
    $lookup: {
      from: "products",        // The collection to join with
      localField: "productId", // Field from the 'orders' collection
      foreignField: "_id",     // Field from the 'products' collection
      as: "productDetails"     // The name of the new array field to add
    }
  }
])


2. $lookup with an Inner Pipeline (Complex Joins)

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      let: { order_prod_id: "$productId" },  // Define variables from local collection
      pipeline: [
        { $match: 
          { $expr: 
            { $and: [
              { $eq: ["$_id", "$$order_prod_id"] }, // Match IDs
              { $gt: ["$price", 100] }              // Only join if price > 100
            ]}
          }
        }
      ],
      as: "expensiveProducts"
    }
  }
])



3. Key Features of $lookup

Result Format: 
    The as field always produces an array, even if only one document matches.
$unwind: 
    Often, you will want to follow a $lookup with an $unwind stage to flatten the array into individual documents for easier reporting.
Atlas Search: 
    In MongoDB Atlas, you can use $lookup in conjunction with $search for powerful full-text search joins.
