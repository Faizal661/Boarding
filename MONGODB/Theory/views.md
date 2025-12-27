View is a read-only queryable object that acts as a "virtual collection." 
It doesn't store any data itself; instead, it provides a window into data 
stored in another collection (the source) by running a predefined aggregation pipeline.

 - simplify data access and enhance security
 - Simplification : Instead of writing a complex 10-stage aggregation pipeline every time, 
   you save it as a view and query it like a simple collection.
 - Security (Field Level): You can create a view that excludes sensitive fields 
   (like password ) and give users access only to the view, not the source collection.
 - Data Modeling: You can use views to present data in a different format or to join multiple 
   collections (via $lookup) into a single "flat" view.


- create a view using the db.createCollection() method or db.createView().

db.createView(
    "highValueSales",   // Name of the view
    "sales",            // Source collection
    [
        { $match: { amount: { $gt: 1000 } } },
        { $project: { _id: 1, amount: 1, customerName: 1 } }
    ]
)

- Query -> db.highValueSales.find({ customerName: "Alice" })


Types of Views
    1.Standard Views
        - Standard views are computed on-demand. When you query the view, MongoDB runs the underlying aggregation pipeline.
        - Pros: Always shows the most up-to-date data.
        - Cons: Performance depends on the complexity of the pipeline because it re-runs every time.
    2.On-Demand Materialized Views
        - Materialized Views store the output on disk. You use the $out or $merge stages in an aggregation to "materialize" the data.
        - Pros: Blazing fast reads because the data is already computed and stored.
        - Cons: The data can become "stale." You must manually refresh it by re-running the aggregation.



Key Limitations
    Since views are read-only and virtual, they have some constraints:

    - Read-Only: You cannot run insert, update, or delete on a view. You must modify the source collection.
    - No Indexes on Views: You cannot create indexes directly on a standard view. MongoDB uses the indexes of the source collection instead.
    - Renaming: You cannot rename a view once it is created (you must drop and recreate it).



example :
    - If you frequently use $lookup to join Orders and Products, 
    a view can make your application code much cleaner.

    db.createView("orderSummary", "orders", [
        {
            $lookup: {
                from: "products",
                localField: "product_id",
                foreignField: "_id",
                as: "productDetails"
            }
        }
    ])