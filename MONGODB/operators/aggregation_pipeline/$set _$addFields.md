$set and $addFields are functional aliases 
used to add new fields to documents or modify existing ones while retaining all original fields.

{ $set: { <newField1>: <expression1>, ... } }
// OR
{ $addFields: { <newField1>: <expression1>, ... } }


$set is often preferred in modern development because its name more accurately reflects 
that it can both "add" and "modify" fields, whereas $addFields implies only addition. 


1. Adding a Calculated Field:
    db.sales.aggregate([
        { $set: { totalValue: { $multiply: ["$price", "$quantity"] } } }
    ])

2. Modifying Nested Documents: Use dot notation to add or update fields inside embedded objects.

    db.users.aggregate([
        { $set: { "stats.lastLogin": new Date() } }
    ])