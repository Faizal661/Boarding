
1. group , project (using filter)

db.employees.aggregate([
    {
        $group: {
        _id: null,
        minAge: { $min: "$age" },
        docs: { $push: "$$ROOT" }
        }
    },
    {
        $project: {
        minAgedPersons: {
            $filter: {
            input: "$docs",
            as: "person",
            cond: { $eq: ["$$person.age", "$minAge"] }
            }
        }
        }
    },
    {
        $unwind:'$minAgePersons'
    },
    {
        $replaceRoot:{newRoot:'$minAgePersons'}
    }
])



2. group , unwind , match , replaceRoot

db.employees.aggregate([
    {
        $group:{
            _id:null,
            minAge:{$min:'$age'},
            docs:{$push:'$$ROOT'}
        }
    },
    {
        $unwind:'$docs'
    },
    {
        $match:{
            $expr:{
                $eq:['$minAge','$docs.age']
            }
        }
    },
    {
        $replaceRoot:{newRoot:'$docs'}
    }
])


