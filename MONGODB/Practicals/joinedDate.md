// joinded year

db.employees.find({
    $expr:{
        $eq:
        [
            { $year:'$joinDate' },
            2024
        ]
    }
})



// month and year joiners

db.employees.find({
  $and: [
    { $expr: { $eq: [{ $year: "$joinDate" }, 2025] } },
    { $expr: { $eq: [{ $month: "$joinDate" }, 1] } }
  ]
});




// joiners from that year onwards

db.employees.find({
  $expr: {
    $gt: [{ $year: "$joinDate" }, 2023]
  }
});
