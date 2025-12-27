GridFS is a specification used by MongoDB to store and retrieve files that exceed the BSON-document size limit of 16MB.

While a standard MongoDB document is capped at 16MB, 
GridFS allows you to store files of virtually any size (gigabytes or even terabytes) by breaking them into smaller chunks.

1. How GridFS Works

Instead of storing a file in a single document, 
GridFS divides the file into parts (called chunks) and stores each chunk as a separate document.

It uses two collections to manage this data:

    fs.files: 
        Stores the file's metadata (filename, upload date, content type, and total size).

    fs.chunks: 
        Stores the actual binary data in small pieces. By default, each chunk is 255 KB.


2. The Workflow

When you Upload: 
    You stream the file to MongoDB. GridFS carves the file into 255KB chunks and saves them in fs.chunks. 
    It then creates a "master record" in fs.files that points to all those chunks using a shared files_id.

When you Download: 
    You query the metadata. GridFS looks up the files_id, fetches all associated chunks in order, and streams them back to your application as a single file.