Array operator in MongoDB


//pop
    db.tasks.updateOne(
        { name: "Project A" },
        { $pop: { tasks: 1 } } // 1 last , -1 first
    )

    db.products.updateOne(
        { _id: 101 },
        { $pull: { colors: "red" } }
    )

    db.users.updateOne(
        { _id: 1 },
        { $pullAll: { roles: ["guest", "temporary", "unverified"] } }
    )

//push
    db.collection.updateOne(
        { _id: 1 },
        { $push: { scores: 95 } }
    )

    db.collection.updateOne(
        { _id: 1 },
        {
            $push: {
            scores: { $each: [80, 85, 90] }
            }
        }
    )

//set   
    db.users.updateOne(
        { name: "John" },
        { $addToSet: { tags: "developer" } 
    }
       

// all vs in    

    db.users.find(
        { city: { $in: ["London", "Paris"] } }
    );
    - $in, Find users who live in either "London" or "Paris".


    db.products.find(
        { tags: { $all: ["Laptop", "Electronics"] } }
    );
    - $all, Find products that have both "Laptop" and "Electronics" tags.


// elemMatch

    db.classrooms.find({
        students: {
            $all: [
                { $elemMatch: { name: "Alice" } },
                { $elemMatch: { name: "Bob" } }
            ]
        }
    });