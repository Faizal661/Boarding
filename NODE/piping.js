const fs = require('fs');

const readStream = fs.createReadStream('NODE/fs.js');
const writeStream = fs.createWriteStream('NODE/piping_output.txt');

// Basic piping
readStream.pipe(writeStream);



// Chain multiple transforms
const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

readStream
  .pipe(upperCaseTransform)
  .pipe(writeStream);