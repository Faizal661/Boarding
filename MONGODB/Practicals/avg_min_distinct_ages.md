db.employees.aggregate([{
    $group:{
        _id:null,
        average:{
            $avg:'$age'
        },
        min:{
            $min:'$age'
        },
        distintsAges:{
            $addToSet:'$age'
        }
    }
}])

// output =>

[
  {
    _id: null,
    average: 34,
    min: 23,
    distintsAges: [
      45, 48, 27, 50, 34,
      31, 35, 29, 38, 42,
      33, 23
    ]
  }
]