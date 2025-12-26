var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('NODE/path.js');
var writeStream = fs.createWriteStream('mygzipfile.txt');
var gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);


// zlib.gzip()
// Compresses data using Gzip

// zlib.gunzip()
// Decompresses Gzip-compressed data

// zlib.deflate()
// Compresses data using the Deflate algorithm

// zlib.inflate()
// Decompresses Deflate-compressed data

// zlib.deflateRaw()
// Compresses data using the Deflate algorithm without headers or checksums

// zlib.inflateRaw()
// Decompresses data compressed with deflateRaw()

// zlib.brotliCompress()
// Compresses data using the Brotli algorithm, a newer compression method offering better ratios

// zlib.brotliDecompress()
// Decompresses Brotli-compressed data.