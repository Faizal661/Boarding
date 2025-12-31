$replaceRoot and $replaceWith 
    they are stages used to promote an embedded document to the top level of the result stream, 
    effectively replacing all existing fields in the current document with the contents of the new one.



Syntax: 

$replaceRoot: Requires a newRoot wrapper object.
    { $replaceRoot: { newRoot: "$nestedObject" } }

$replaceWith: Accepts the expression directly.
    { $replaceWith: "$nestedObject" }



Usage Examples

1.Promoting a Nested Object:
    If you have a document { _id: 1, userProfile: { name: "Alice", age: 30 } }, 
    applying { $replaceWith: "$userProfile" } results in:
        { name: "Alice", age: 30 }.

2.Promoting an Object from an Array (after $unwind):
    Commonly used after a $lookup to make the joined data the main document:
    db.orders.aggregate([
    { $lookup: { from: "customers", localField: "custId", foreignField: "_id", as: "customerInfo" } },
    { $unwind: "$customerInfo" },
    { $replaceWith: "$customerInfo" }
    ])