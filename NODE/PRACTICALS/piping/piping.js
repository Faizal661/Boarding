const fs = require('fs');

const readStream = fs.createReadStream('NODE/built-in-modules/os.js', {
  highWaterMark: 16 * 1024
});
const writeStream = fs.createWriteStream('NODE/PRACTICALS/piping/piping_output.txt');

// readStream.on('data', data=>{
//   console.log(data.toString())
//   console.log('------')
// })

// console.log(fs.statSync('NODE/PRACTICALS/piping/piping_output.txt'))
// Basic piping
// readStream.pipe(writeStream);



// Chain multiple transforms
const { Transform } = require('stream');
const zlib = require('zlib')

const compressTransform = zlib.createGzip()


const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});


const finalWriteStream = readStream
  .pipe(upperCaseTransform)
  .pipe(compressTransform)
  .pipe(writeStream);


finalWriteStream.on('finish', () => {
  console.log('Compression finished. Starting decompression...');

  const compressedData = fs.createReadStream('NODE/PRACTICALS/piping/piping_output.txt');
  const decompressedData = fs.createWriteStream('NODE/PRACTICALS/piping/decompress.txt');
  const dCom = zlib.createGunzip();

  compressedData.pipe(dCom).pipe(decompressedData);

  decompressedData.on('finish', () => {
    console.log('Decompression finished successfully!');
  });
});

