$bucket is used to categorize documents into specific groups (buckets) based on a numerical or date-based range.

Core Functionality
    Manual Range Definition: 
        Unlike $bucketAuto, which tries to create even distributions, $bucket requires you to explicitly define the boundaries (e.g., ages 0-18, 18-35, 35-60).
    Automatic Counting:
        It automatically counts how many documents fall into each bucket.
    Custom Accumulation: 
        You can use an optional output field to calculate additional metrics for each bucket (like averagePrice or totalSales).
    Default Bucket: 
        Any document that does not fall within the defined boundaries can be sent to a "default" bucket (if specified).





Syntax

    {
    $bucket: {
        groupBy: <expression>,                      // Field to categorize (e.g., "$age")
        boundaries: [ <val1>, <val2>, ... ],    // Lower boundaries (inclusive)
        default: <literal>,                     // Optional: ID for docs outside boundaries
        output: {                               // Optional: Additional calculations
            count: { $sum: 1 },
            avgValue: { $avg: "$price" }
        }
    }
    }




Example
    Categorizing products into price tiers:
    
    db.products.aggregate([
    {
        $bucket: {
            groupBy: "$price",
            boundaries: [ 0, 50, 100, 500 ],         // Creates ranges 0-49, 50-99, 100-499
            default: "Premium",                      // Prices 500 and above
            output: {
                totalCount: { $sum: 1 },
                itemNames: { $push: "$name" }
            }
        }
    }
    ])