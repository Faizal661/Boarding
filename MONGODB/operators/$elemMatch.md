$elemMatch operator is used to match documents where at least one element in an array satisfies all specified criteria. 
It is essential when you need to query arrays of embedded documents based on multiple fields. 


[
  {
    "_id": 1,
    "name": "Alice",
    "grades": [
      { "subject": "Math", "score": 85 },
      { "subject": "Science", "score": 95 }
    ]
  },
  {
    "_id": 2,
    "name": "Bob",
    "grades": [
      { "subject": "Math", "score": 75 },
      { "subject": "Science", "score": 92 }
    ]
  },
]


?. Find a student who has at least one grade that is both greater than 80 and less than 90.

db.students.find({ 
    grades: { 
        $elemMatch: { 
            score: { 
                $gt: 80, $lt: 90
            } 
        } 
    } 
})
// return only alice docuemnt

Why use it? 
    Without $elemMatch, a query like { "grades.score": { $gt: 80, $lt: 90 } } could match a document 
    where one grade is 95 (\(>80\)) and another grade is 75 (\(<90\)), 
    even if no single grade falls between 80 and 90. 



// The $ operator returns only the first matching array element
    db.students.find(
        { grades: { $elemMatch: { score: { $gt: 80, $lt: 90 } } } },
        { "grades.$": 1, name: 1 }            
    )