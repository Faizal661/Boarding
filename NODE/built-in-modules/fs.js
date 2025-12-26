const fs = require('fs')

// const read=fs.readFileSync('./Node/cluster.js',"utf8")
// console.log(read)


fs.writeFileSync('example.txt', (new Date()).toDateString())

fs.appendFileSync('example.txt', '\nAdditional Data');

// fs.unlinkSync('example1.txt');

// fs.renameSync('example.txt', 'example1.txt');



fs.readFile() / fs.readFileSync() // Reads the entire contents of a file.
fs.writeFile() / fs.writeFileSync() // "Writes data to a file ,replacing the file if it already exists."
fs.appendFile() / fs.appendFileSync() // Appends data to a file.
fs.unlink() / fs.unlinkSync() // Deletes a file.
fs.rename() / fs.renameSync() // Renames or moves a file or directory.
fs.copyFile() / fs.copyFileSync() // Copies a file.
fs.stat() / fs.statSync() // "Gets file status (size, permissions, timestamps, etc.)."



fs.mkdir() / fs.mkdirSync()  //Creates a new directory.
fs.rmdir() / fs.rmdirSync() (Legacy)  //Removes an empty directory. (Superseded by fs.rm())
fs.rm() / fs.rmSync()  //Removes files and directories recursively (preferred over rmdir).
fs.readdir() / fs.readdirSync()  //Reads the contents of a directory.