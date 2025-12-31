$sortByCount is a MongoDB aggregation pipeline stage used to group documents by a specific expression, 
count the occurrences in each group, and sort the results in descending order by that count.

// db.employees.aggregate([{ $sortByCount: "$age" }] )
[
  { _id: 23, count: 3 },
  { _id: 29, count: 2 },
  { _id: 33, count: 1 },
  { _id: 48, count: 1 },
  { _id: 35, count: 1 },
  { _id: 45, count: 1 },
  { _id: 31, count: 1 },
  { _id: 34, count: 1 },
  { _id: 42, count: 1 },
  { _id: 38, count: 1 },
  { _id: 27, count: 1 },
  { _id: 50, count: 1 }
]