1. Database and Collection Management

    show dbs: List all databases.

    use <database_name>: Switch to a database. Creates it if it doesn't exist upon the first document insertion.

    db: Show the current database name.

    show collections: List all collections in the current database.

    db.createCollection('<collection_name>'): Explicitly create a new collection.

    db.dropDatabase(): Delete the current database. Use with caution!

    db.<collection_name>.drop(): Delete a specific collection.

2. CRUD (Create, Read, Update, Delete) Operations

Create (Insert)

    db.<collection_name>.insertOne({ name: 'John Doe', age: 30 }): Inserts a single document.

    db.<collection_name>.insertMany([{ item: 'pen', qty: 25 }, { item: 'eraser', qty: 50 }]): Inserts multiple documents.

Read (Query)

    db.<collection_name>.find(): Returns all documents.

    db.<collection_name>.find({ age: 30 }): Finds documents matching a specific field and value.

    db.<collection_name>.findOne({ age: 30 }): Returns the first document that matches the query.

    db.<collection_name>.find().pretty(): Displays query results in a readable format.

    db.<collection_name>.find({ price: { $gt: 100 } }): Finds documents where price is greater than 100. Other operators include $lt, $gte, $lte, $ne, $in, etc.

    db.<collection_name>.find({ type: 'food', stock: { $lt: 50 } }): Finds documents matching multiple criteria (AND).

    db.<collection_name>.find({ $or: [{ status: 'A' }, { status: 'D' }] }): Finds documents matching at least one of the criteria (OR).

Update

    db.<collection_name>.updateOne({ name: 'John Doe' }, { $set: { age: 31 } }): Updates a single document.

    db.<collection_name>.updateMany({ price: { $gt: 100 } }, { $inc: { stock: 10 } }): Updates multiple documents by incrementing the stock field.

    db.<collection_name>.replaceOne({ item: 'pen' }, { item: 'pen', brand: 'Bic', price: 1.50 }): Replaces an entire document.

Delete

    db.<collection_name>.deleteOne({ status: 'A' }): Deletes a single document.

    db.<collection_name>.deleteMany({ status: 'A' }): Deletes all documents that match the filter.

    db.<collection_name>.deleteMany({}): Deletes all documents in a collection.

3. Aggregation and Data Analysis

    db.<collection_name>.countDocuments({ status: 'A' }): Counts documents matching a query.

    db.<collection_name>.distinct('department', {}): Finds unique values for a field.

    db.<collection_name>.aggregate([ ... ]): The aggregation framework.

        { $match: { category: 'electronics' } }: Filters documents.

        { $group: { _id: '$category', total: { $sum: '$price' } } }: Groups and performs calculations.

        Common Stages:

            $match: Filters documents.

            $group: Groups documents by a specified field.

            $sort: Sorts the documents.

            $project: Reshapes each document in the stream, often to include, exclude, or rename fields.

            $limit: Passes the first 'n' documents.

            $unwind: Deconstructs an array field from the input documents to output a document for each element.

4. Index Management

    db.<collection_name>.createIndex({ name: 1 }): Creates an ascending index on the name field.

    db.<collection_name>.getIndexes(): Lists all indexes on a collection.

    db.<collection_name>.dropIndex('index_name'): Deletes a specific index.

    db.<collection_name>.dropIndexes(): Deletes all indexes on a collection.

5. System and Administrative Commands

    help: Displays the help message for the current context.

    db.stats(): Provides statistics about the current database.

    db.<collection_name>.stats(): Provides statistics about a specific collection.

    quit(): Exits the MongoDB shell.
